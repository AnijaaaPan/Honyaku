import { ActionRowBuilder, ButtonBuilder, ButtonInteraction, ButtonStyle, ComponentType, EmbedBuilder } from 'discord.js'
import { MAX_DATA_LENGTH } from '~/constants/generals'
import { CUSTOM_IDS } from '~/constants/ids'
import { Setting } from '~/interfaces/IRedis'
import BaseInteractionManager from '~/managers/BaseInteractionManager'
import WrapDataManager from '~/managers/WrapDataManager'
import SettingService from '~/services/SettingService'
import { getFlagEmoji, getLocaleName, getOnOffEmoji } from '~/utils/generals'

export default class SettingCommand extends BaseInteractionManager {
  private _service = new SettingService(this.commandManager.guildId)
  private _settings!: Setting[]
  private _nowIndex = 0
  private _maxIndex = 0
  private _countIsSet = 0

  protected async main() {
    await this.resetSetting()
    await this._pushButtonLogic()
  }

  private async resetSetting() {
    this._settings = await this._service.getDatas()
    if (this._settings.length === 0) {
      const initData = await this._service.initData() ?? []
      this._settings = initData
    }
    this._maxIndex = this._settings.length - 1
    this._countIsSet = this._settings.filter(setting => setting.isSet).length
  }

  private async _pushButtonLogic() {
    const { channel } = this.commandManager
    const messageOptions = this._generateMessage()
    const interactionReplyOptions = WrapDataManager.toInteractionReplyOptions({
      ...messageOptions,
      ephemeral: true
    })
    await this.commandManager.updateMessage(interactionReplyOptions)

    const customIds = WrapDataManager.castToType<string[]>([CUSTOM_IDS.TOP, CUSTOM_IDS.UP, CUSTOM_IDS.DOWN, CUSTOM_IDS.BOTTOM, CUSTOM_IDS.ON, CUSTOM_IDS.OFF])
    const collector = channel?.createMessageComponentCollector({
      componentType: ComponentType.Button,
      filter: (i: ButtonInteraction) => {
        return customIds.includes(i.customId)
      },
      idle: 30000,
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
        await this._updateIsSet(i)
      }

      const messageOptions = this._generateMessage()
      await i.update(messageOptions)
    })
  }

  private async _updateIsSet(i: ButtonInteraction) {
    const customId = i.customId
    if (customId !== CUSTOM_IDS.ON && customId !== CUSTOM_IDS.OFF) return
    if (customId === CUSTOM_IDS.ON && this._countIsSet >= MAX_DATA_LENGTH) return

    this._settings[this._nowIndex].isSet = customId === CUSTOM_IDS.ON
    await this._service.saveData(this._settings)
    await this.resetSetting()
  }

  private _generateMessage() {
    const embed = this._generateEmbed()

    const topButton = new ButtonBuilder().setCustomId(CUSTOM_IDS.TOP).setStyle(ButtonStyle.Secondary).setEmoji('⏫')
    const upButton = new ButtonBuilder().setCustomId(CUSTOM_IDS.UP).setStyle(ButtonStyle.Secondary).setEmoji('🔼')
    const downButton = new ButtonBuilder().setCustomId(CUSTOM_IDS.DOWN).setStyle(ButtonStyle.Secondary).setEmoji('🔽')
    const bottomButton = new ButtonBuilder().setCustomId(CUSTOM_IDS.BOTTOM).setStyle(ButtonStyle.Secondary).setEmoji('⏬')
    const onButton = new ButtonBuilder().setCustomId(CUSTOM_IDS.ON).setStyle(ButtonStyle.Secondary).setEmoji('✅')
    const offButton = new ButtonBuilder().setCustomId(CUSTOM_IDS.OFF).setStyle(ButtonStyle.Secondary).setEmoji('❌')

    topButton.setDisabled(this._nowIndex === 0)
    upButton.setDisabled(this._nowIndex === 0)
    downButton.setDisabled(this._nowIndex !== 0 && this._nowIndex === this._maxIndex)
    bottomButton.setDisabled(this._nowIndex !== 0 && this._nowIndex === this._maxIndex)

    onButton.setDisabled(this._countIsSet === MAX_DATA_LENGTH)
    offButton.setDisabled(this._countIsSet === 0)

    const messageOptions = WrapDataManager.toMessageOptions({
      components: [
        new ActionRowBuilder<ButtonBuilder>().addComponents(topButton, upButton, downButton, bottomButton),
        new ActionRowBuilder<ButtonBuilder>().addComponents(onButton, offButton)
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
    embed.setFooter({
      text: this.format(i18n.commands.language.embed.footer.text, this._countIsSet, MAX_DATA_LENGTH)
    })
    return embed
  }

  private _generateDescription() {
    const contents = this._settings.map((setting, index) => {
      const { isSet, locale } = setting
      const nowEmoji = this._getNowEmoji(index)
      const onOffEmoji = getOnOffEmoji(isSet)
      const flagEmoji = getFlagEmoji(locale)
      const localeName = getLocaleName(locale)
      const localizedName = this.getLocalizedName(locale)
      return `**${nowEmoji} ${onOffEmoji}: ${flagEmoji} \`${localeName} ${localizedName}\`**`
    })
    return contents.join('\n')
  }

  private _getNowEmoji(index: number) {
    return this._nowIndex === index ? '➡' : '<:none:1177449522025205910>'
  }
}