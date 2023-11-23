import { ActionRowBuilder, ButtonBuilder, ButtonInteraction, ButtonStyle, ComponentType, EmbedBuilder, LocaleString } from 'discord.js'
import { BUTTON_OFF, BUTTON_ON } from '~/constants/buttons'
import { CUSTOM_IDS } from '~/constants/ids'
import { client } from '~/index'
import { Setting } from '~/interfaces/redis/ISetting'
import WrapDataManager from '~/managers/generals/WrapDataManager'
import SettingService from '~/services/SettingService'
import { BaseCommandManager } from '../BaseCommandManager'

export default class SettingCommand extends BaseCommandManager {
  private _service = new SettingService(this.commandManager.guildId)
  private _settings!: Setting[]
  private _nowIndex = 0
  private _maxIndex = 0

  protected async main() {
    this._settings = await this._service.getDatas()
    this._maxIndex = this._settings.length - 1

    await this.waitPushButton()
  }

  public async waitPushButton() {
    const { channel, userId } = this.commandManager
    const messageOptions = this._generateMessage()
    const interactionReplyOptions = WrapDataManager.toInteractionReplyOptions({
      ...messageOptions,
      ephemeral: true
    })
    await this.commandManager.updateMessage(interactionReplyOptions)

    const filter = (i: ButtonInteraction) => {
      return i.user.id === userId
    }

    const collector = channel?.createMessageComponentCollector({
      componentType: ComponentType.Button,
      filter,
      idle: 30000
    })

    collector?.on('collect', async (i) => {
      if (i.customId === CUSTOM_IDS.PAGE_INITIAL) {
        this._nowIndex = 0
      } else if (i.customId === CUSTOM_IDS.PAGE_BACK) {
        this._nowIndex--
      } else if (i.customId === CUSTOM_IDS.PAGE_NEXT) {
        this._nowIndex++
      } else if (i.customId === CUSTOM_IDS.PAGE_END) {
        this._nowIndex = this._maxIndex
      } else { }

      const messageOptions = this._generateMessage()
      await i.update(messageOptions)
    })
  }

  private _generateMessage() {
    const embed = this._generateEmbed()

    const topButton = new ButtonBuilder().setCustomId(CUSTOM_IDS.TOP).setStyle(ButtonStyle.Secondary).setEmoji('⏫')
    const upButton = new ButtonBuilder().setCustomId(CUSTOM_IDS.UP).setStyle(ButtonStyle.Secondary).setEmoji('🔼')
    const downButton = new ButtonBuilder().setCustomId(CUSTOM_IDS.DOWN).setStyle(ButtonStyle.Secondary).setEmoji('🔽')
    const bottomButton = new ButtonBuilder().setCustomId(CUSTOM_IDS.BOTTOM).setStyle(ButtonStyle.Secondary).setEmoji('⏬')

    topButton.setDisabled(this._nowIndex === 0)
    upButton.setDisabled(this._nowIndex === 0)
    downButton.setDisabled(this._nowIndex !== 0)
    bottomButton.setDisabled(this._nowIndex !== 0)

    const messageOptions = WrapDataManager.toMessageOptions({
      components: [
        new ActionRowBuilder<ButtonBuilder>().addComponents(topButton, upButton, downButton, bottomButton),
        new ActionRowBuilder<ButtonBuilder>().addComponents(BUTTON_ON, BUTTON_OFF)
      ],
      embeds: [embed]
    })
    return messageOptions
  }

  private _generateEmbed() {
    const { i18n } = this.commandManager

    const description = this._generateDescription()
    const embed = new EmbedBuilder()
    embed.setTitle(i18n.commands.language.embed.title)
    embed.setThumbnail(client.user?.avatarURL() ?? '')
    embed.setDescription(description)
    return embed
  }

  private _generateDescription() {
    const contents = this._settings.map((setting, index) => {
      const { isSet, locale } = setting
      const nowEmoji = this._nowEmoji(index)
      const onOffEmoji = this._onOffEmoji(isSet)
      const localeName = this._getLocaleName(locale)
      const localizedName = this._getLocalizedName(locale)
      const flagEmoji = this._getFlagEmoji(locale)
      return `**${nowEmoji} ${onOffEmoji}: \`${localeName} ${localizedName}\` ${flagEmoji}**`
    })
    return contents.join('\n')
  }

  private _nowEmoji(index: number) {
    return this._nowIndex === index ? '➡' : '<:none:1177369293512515676>'
  }

  private _onOffEmoji(isSet: boolean) {
    return isSet ? '✅' : '❌'
  }

  private _getLocaleName(locale: LocaleString) {
    const { i18n } = this.commandManager
    return i18n.localeName[locale]
  }

  private _getLocalizedName(locale: LocaleString) {
    const { i18n } = this.commandManager
    return i18n.localizedName[locale]
  }

  private _getFlagEmoji(locale: LocaleString) {
    switch (locale) {
      case 'id':
        return '🇮🇩'

      case 'en-US':
        return '🇺🇸'

      case 'en-GB':
        return '🇬🇧'

      case 'bg':
        return '🇧🇬'

      case 'zh-CN':
        return '🇨🇳'

      case 'zh-TW':
        return '🇹🇼'

      case 'hr':
        return '🇭🇷'

      case 'cs':
        return '🇨🇿'

      case 'da':
        return '🇩🇰'

      case 'nl':
        return '🇳🇱'

      case 'fi':
        return '🇫🇮'

      case 'fr':
        return '🇫🇷'

      case 'de':
        return '🇩🇪'

      case 'el':
        return '🇬🇷'

      case 'hi':
        return '🇮🇳'

      case 'hu':
        return '🇭🇺'

      case 'it':
        return '🇮🇹'

      case 'ja':
        return '🇯🇵'

      case 'ko':
        return '🇰🇷'

      case 'lt':
        return '🇱🇹'

      case 'no':
        return '🇳🇴'

      case 'pl':
        return '🇵🇱'

      case 'pt-BR':
        return '🇵🇹'

      case 'ro':
        return '🇷🇴'

      case 'ru':
        return '🇷🇺'

      case 'es-ES':
        return '🇪🇸'

      case 'sv-SE':
        return '🇸🇪'

      case 'th':
        return '🇹🇭'

      case 'tr':
        return '🇹🇷'

      case 'uk':
        return '🇺🇦'

      case 'vi':
        return '🇻🇳'

    }
  }
}