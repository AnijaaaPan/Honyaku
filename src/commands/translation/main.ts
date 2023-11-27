import { TranslationServiceClient } from '@google-cloud/translate'
import { APIEmbedField, ActionRowBuilder, ButtonBuilder, ButtonInteraction, ButtonStyle, ComponentType, Embed, EmbedBuilder, LocaleString } from 'discord.js'
import { CustomError } from '~/interfaces/IError'
import { Setting } from '~/interfaces/IRedis'
import { TranslationMessage } from '~/interfaces/commands/ITranslation'
import { Env } from '~/lib/Env'
import BaseInteractionManager from '~/managers/BaseInteractionManager'
import WrapDataManager from '~/managers/WrapDataManager'
import SettingService from '~/services/SettingService'
import { getFlagEmoji } from '~/utils/generals'

export default class TranslationCommand extends BaseInteractionManager {
  private _service = new SettingService(this.commandManager.guildId)
  private _settings!: Setting[]
  private _originalMessage!: TranslationMessage
  private _targetLang!: LocaleString

  protected async main() {
    await this._guard()
    this._setInitData()

    const { channel, i18n } = this.commandManager
    const components = this._getSettingComponents()
    const interactionReplyOptions = WrapDataManager.toInteractionReplyOptions({
      content: i18n.commands.translation.content,
      components,
      ephemeral: true
    })
    await this.commandManager.updateMessage(interactionReplyOptions)

    const collector = channel?.createMessageComponentCollector({
      componentType: ComponentType.Button,
      filter: (i: ButtonInteraction) => {
        return i.customId.includes('lang-')
      }
    })

    collector?.on('collect', async (i) => {
      this._targetLang = WrapDataManager.castToType<LocaleString>(i.customId.replace('lang-', ''))

      const translateMessage = await this._translateMessage()
      await i.update(translateMessage)
      collector.stop()
    })
  }

  private async _guard() {
    const { i18n } = this.commandManager
    this._settings = await this._service.getDatas()
    this._settings = this._settings.filter(data => data.isSet)
    if (this._settings.length === 0) {
      throw new CustomError({
        content: i18n.commands.translation.undefined
      })
    }
  }

  private _setInitData() {
    const { interaction } = this.commandManager
    if (!interaction.isMessageContextMenuCommand()) return

    this._originalMessage = WrapDataManager.toTranslationMessage({
      isTranslation: false,
      lang: '',
      messageOptions: interaction.targetMessage
    })
  }

  private _getSettingComponents() {
    const buttons = this._settings.map((setting) => {
      const { locale } = setting
      const customId = `lang-${locale}`
      const flagEmoji = getFlagEmoji(locale)
      const localizedName = this.getLocalizedName(locale)

      const button = new ButtonBuilder()
      button.setCustomId(customId)
      button.setStyle(ButtonStyle.Secondary)
      button.setEmoji(flagEmoji)
      button.setLabel(localizedName)
      return button
    })

    const components = [new ActionRowBuilder<ButtonBuilder>().addComponents(buttons)]
    return components
  }

  private async _translateMessage() {
    const message = this._originalMessage.messageOptions
    const messageOptions = WrapDataManager.toMessageOptions({
      content: '',
      components: [],
      embeds: []
    })

    if (message.content) {
      const transText = await this._translate(message.content)
      messageOptions.content = transText
    }

    const embeds = WrapDataManager.castToType<Embed[]>(message.embeds)
    if (!embeds) return messageOptions

    for (let i = 0; i < embeds.length; i++) {
      const embed = embeds[i]
      const transEmbed = new EmbedBuilder()
      transEmbed.setURL(embed.url)
      transEmbed.setColor(embed.color)
      if (embed.thumbnail?.url) {
        transEmbed.setThumbnail(embed.thumbnail.url)
      }
      const embedImageData = embed.image ?? embed.video
      if (embedImageData?.url) {
        transEmbed.setImage(embedImageData.url)
      }
      if (embed.timestamp) {
        transEmbed.setTimestamp(new Date(embed.timestamp))
      }

      if (embed.title) {
        const transText = await this._translate(embed.title)
        transEmbed.setTitle(transText)
      }
      if (embed.author) {
        const transText = await this._translate(embed.author.name)
        transEmbed.setAuthor({
          ...embed.author,
          name: transText
        })
      }
      if (embed.description) {
        const transText = await this._translate(embed.description)
        transEmbed.setDescription(transText)
      }
      if (embed.footer) {
        const transText = await this._translate(embed.footer.text)
        transEmbed.setFooter({
          ...embed.footer,
          text: transText
        })
      }

      const embedFields = WrapDataManager.castToType<APIEmbedField[]>([])
      for (let n = 0; n < embed.fields.length; n++) {
        const embedField = embed.fields[n]

        const transName = await this._translate(embedField.name)
        const transValue = await this._translate(embedField.value)

        const transEmbedField = WrapDataManager.castToType<APIEmbedField>({
          name: transName,
          value: transValue,
          inline: embedField.inline
        })
        embedFields.push(transEmbedField)
      }
      transEmbed.addFields(embedFields)

      messageOptions.embeds?.push(transEmbed)
    }
    return messageOptions
  }

  private async _translate(text: string) {
    const translationClient = new TranslationServiceClient()
    const res = await translationClient.translateText({
      parent: translationClient.locationPath(Env.googleProjectId, Env.googleLocation),
      contents: [text],
      mimeType: 'text/plain',
      sourceLanguageCode: this._originalMessage.lang,
      targetLanguageCode: this._targetLang,
    })
    const translations = res[0].translations
    if (!translations) return ''
    return WrapDataManager.castToType<string>(translations[0].translatedText)
  }
}