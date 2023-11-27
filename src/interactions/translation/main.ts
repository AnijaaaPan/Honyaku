import cld from 'cld'
import deepl from 'deepl-node'
import { ActionRowBuilder, ButtonBuilder, ButtonInteraction, ButtonStyle, ComponentType, MessageContextMenuCommandInteraction } from 'discord.js'
import { getFlagEmoji } from '~/futures/generals'
import { CustomError } from '~/interfaces/IError'
import { Setting } from '~/interfaces/redis/ISetting'
import { Env } from '~/lib/Env'
import BaseInteractionManager from '~/managers/BaseInteractionManager'
import WrapDataManager from '~/managers/generals/WrapDataManager'
import SettingService from '~/services/SettingService'

export default class TranslationCommand extends BaseInteractionManager<MessageContextMenuCommandInteraction> {
  private _service = new SettingService(this.commandManager.guildId)
  private _settings!: Setting[]
  private _translator = new deepl.Translator(Env.deeplAuthKey)

  protected async main() {
    await this._guard()

    const { channel, i18n, interaction, userId } = this.commandManager

    const buttons = this._getSettingButtons()
    const components = [new ActionRowBuilder<ButtonBuilder>().addComponents(buttons)]
    const interactionReplyOptions = WrapDataManager.toInteractionReplyOptions({
      content: i18n.commands.translation.content,
      components,
      ephemeral: true
    })
    await this.commandManager.updateMessage(interactionReplyOptions)

    const filter = (i: ButtonInteraction) => {
      return i.user.id === userId && i.customId.includes('lang-')
    }

    const collector = channel?.createMessageComponentCollector({
      componentType: ComponentType.Button,
      filter,
      idle: 30000
    })

    collector?.on('collect', async (i) => {
      console.log(i.customId)
    })

    const detectLanguage = await this._translateLanguage(interaction.targetMessage.content)
    console.log(detectLanguage)
  }

  private async _guard() {
    const { i18n } = this.commandManager

    this._settings = await this._service.getDatas()
    this._settings = this._settings.filter(data => data.isSet)
    if (this._settings.length !== 0) return

    throw new CustomError({
      content: i18n.commands.translation.undefined
    })
  }

  private _getSettingButtons() {
    const buttons = this._settings.map(setting => {
      const { locale } = setting
      const customId = `lang-${locale}`
      const flagEmoji = getFlagEmoji(locale)
      const localizedName = this.getLocalizedName(locale)
      const button = new ButtonBuilder().setCustomId(customId).setStyle(ButtonStyle.Secondary).setLabel(localizedName).setEmoji(flagEmoji)
      return button
    })
    return buttons
  }

  private async _translateMessage(text: string) {
    const result = await cld.detect(text)
    console.log(result)
  }

  private async _translateLanguage(text: string) {
    const result = await cld.detect(text)
    console.log(result)
  }
}