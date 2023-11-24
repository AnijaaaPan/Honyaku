import { ActionRowBuilder, ButtonBuilder, ButtonInteraction, ButtonStyle, ComponentType, EmbedBuilder, LocaleString } from 'discord.js'
import { BUTTON_OFF, BUTTON_ON } from '~/constants/buttons'
import { CUSTOM_IDS } from '~/constants/ids'
import { getFlagEmoji, getLocaleName, getOnOffEmoji } from '~/futures/generals'
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
    await this.resetSetting()
    await this._pushButtonLogic()
  }

  private async resetSetting() {
    this._settings = await this._service.getDatas()
    this._maxIndex = this._settings.length - 1
  }

  private async _pushButtonLogic() {
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
      if (i.customId === CUSTOM_IDS.TOP) {
        this._nowIndex = 0
      } else if (i.customId === CUSTOM_IDS.UP) {
        this._nowIndex--
      } else if (i.customId === CUSTOM_IDS.DOWN) {
        this._nowIndex++
      } else if (i.customId === CUSTOM_IDS.BOTTOM) {
        this._nowIndex = this._maxIndex
      } else {
        await this._updateIsSet(i.customId)
      }

      const messageOptions = this._generateMessage()
      await i.update(messageOptions)
    })
  }

  private async _updateIsSet(customId: string) {
    switch (customId) {
      case CUSTOM_IDS.ON:
        this._settings[this._nowIndex].isSet = true
        break

      case CUSTOM_IDS.OFF:
        this._settings[this._nowIndex].isSet = false
        break
    }

    await this._service.saveData(this._settings)
    await this.resetSetting()
  }

  private _generateMessage() {
    const embed = this._generateEmbed()

    const topButton = new ButtonBuilder().setCustomId(CUSTOM_IDS.TOP).setStyle(ButtonStyle.Secondary).setEmoji('⏫')
    const upButton = new ButtonBuilder().setCustomId(CUSTOM_IDS.UP).setStyle(ButtonStyle.Secondary).setEmoji('🔼')
    const downButton = new ButtonBuilder().setCustomId(CUSTOM_IDS.DOWN).setStyle(ButtonStyle.Secondary).setEmoji('🔽')
    const bottomButton = new ButtonBuilder().setCustomId(CUSTOM_IDS.BOTTOM).setStyle(ButtonStyle.Secondary).setEmoji('⏬')

    topButton.setDisabled(this._nowIndex === 0)
    upButton.setDisabled(this._nowIndex === 0)
    downButton.setDisabled(this._nowIndex !== 0 && this._nowIndex === this._maxIndex)
    bottomButton.setDisabled(this._nowIndex !== 0 && this._nowIndex === this._maxIndex)

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
    embed.setDescription(description)
    return embed
  }

  private _generateDescription() {
    const contents = this._settings.map((setting, index) => {
      const { isSet, locale } = setting
      const nowEmoji = this._getNowEmoji(index)
      const onOffEmoji = getOnOffEmoji(isSet)
      const flagEmoji = getFlagEmoji(locale)
      const localeName = getLocaleName(locale)
      const localizedName = this._getLocalizedName(locale)
      return `**${nowEmoji} ${onOffEmoji}: ${flagEmoji} \`${localeName} ${localizedName}\`**`
    })
    return contents.join('\n')
  }

  private _getNowEmoji(index: number) {
    return this._nowIndex === index ? '➡' : '<:none:1177449522025205910>'
  }

  private _getLocalizedName(locale: LocaleString) {
    const { i18n } = this.commandManager
    return i18n.localizedNames[locale]
  }
}