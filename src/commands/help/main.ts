import { ActionRowBuilder, AttachmentBuilder, ButtonBuilder, ButtonInteraction, ButtonStyle, ComponentType, EmbedBuilder } from 'discord.js'
import { CUSTOM_IDS, HowToUseTypes } from '~/constants/ids'
import { client } from '~/index'
import { HowToUseTypeValues } from '~/interfaces/general'
import BaseInteractionManager from '~/managers/BaseInteractionManager'
import WrapDataManager from '~/managers/WrapDataManager'
import TextColorManager from '~/managers/texts/TextColorManager'
import TextManager from '~/managers/texts/TextManager'

export default class HelpCommand extends BaseInteractionManager {
  private _embeds = WrapDataManager.castToType<EmbedBuilder[]>([])
  private _attachments = WrapDataManager.castToType<AttachmentBuilder[]>([])
  private _pageIndex = WrapDataManager.castToType<number>(0)

  protected async main() {
    this._addHowToSetting()
    this._addHowToUse(HowToUseTypes.PC)
    this._addHowToUse(HowToUseTypes.SMART_PHONE)
    await this._paginateLogic()
  }

  private _addHowToSetting() {
    const { i18n } = this.commandManager
    const i18nEmbed = i18n.commands.help.embeds[0]

    const textManager = new TextManager()
    textManager.addCodeBlockText(TextColorManager.colorWhite(`➡: ${i18nEmbed.contents[0]}`))
    textManager.addCodeBlockText('')
    textManager.addCodeBlockText(TextColorManager.colorWhite(`🔼: ${i18nEmbed.contents[1]}`))
    textManager.addCodeBlockText(TextColorManager.colorWhite(`🔽: ${i18nEmbed.contents[2]}`))
    textManager.addCodeBlockText('')
    textManager.addCodeBlockText(TextColorManager.colorWhite(`✅: ${i18nEmbed.contents[3]}`))
    textManager.addCodeBlockText(TextColorManager.colorWhite(`❌: ${i18nEmbed.contents[4]}`))

    const embed = new EmbedBuilder()
    embed.setTitle(i18nEmbed.title)
    embed.setThumbnail(client.user?.avatarURL() ?? null)
    embed.setDescription(`- ${i18nEmbed.description}\n>>> ${textManager.format()}`)
    embed.setFooter(i18nEmbed.footer)

    this._embeds.push(embed)
  }

  private _addHowToUse(index: HowToUseTypeValues) {
    const { i18n } = this.commandManager
    const howToUseEmbed = i18n.commands.help.howToUseEmbed
    const i18nEmbed = i18n.commands.help.embeds[index]

    const textManager = new TextManager()
    textManager.addCodeBlockText(TextColorManager.colorWhite(`1. ${this.format(howToUseEmbed.contents[0], i18nEmbed.contents[0])}`))
    textManager.addCodeBlockText(TextColorManager.colorWhite(`2. ${this.format(howToUseEmbed.contents[1], i18nEmbed.contents[1])}`))
    textManager.addCodeBlockText(TextColorManager.colorWhite(`3. ${this.format(howToUseEmbed.contents[2], i18nEmbed.contents[1])}`))
    textManager.addCodeBlockText(TextColorManager.colorWhite(`4. ${this.format(howToUseEmbed.contents[3], i18nEmbed.contents[1])}`))
    textManager.addCodeBlockText(TextColorManager.colorWhite(`5. ${howToUseEmbed.contents[4]}`))

    const path = this._getGifPath(index)
    const attachment = new AttachmentBuilder(path, { name: 'howToUse.gif' })
    this._attachments.push(attachment)

    const embed = new EmbedBuilder()
    embed.setTitle(this.format(howToUseEmbed.title, i18nEmbed.type))
    embed.setThumbnail(client.user?.avatarURL() ?? null)
    embed.setDescription(`- **${howToUseEmbed.description}**\n>>> ${textManager.format()}`)
    embed.setImage('attachment://howToUse.gif')
    this._embeds.push(embed)
  }

  private _getGifPath(index: HowToUseTypeValues) {
    switch (index) {
      case HowToUseTypes.PC:
        return 'images/HowToUsePc.gif'

      case HowToUseTypes.SMART_PHONE:
        return 'images/HowToUseSmartPhone.gif'
    }
  }

  private async _paginateLogic() {
    const { channel } = this.commandManager

    const messageOptions = this._generateMessageOption()
    await this.commandManager.updateMessage({
      ...messageOptions,
      ephemeral: true
    })

    const collector = channel?.createMessageComponentCollector({
      componentType: ComponentType.Button,
      filter: (interaction: ButtonInteraction) => {
        return interaction.customId === CUSTOM_IDS.PAGE_BACK ||
          interaction.customId === CUSTOM_IDS.PAGE_NEXT
      },
      idle: 60000
    })

    collector?.on('collect', async (interaction) => {
      if (interaction.customId === CUSTOM_IDS.PAGE_BACK) {
        this._pageIndex--
      } else {
        this._pageIndex++
      }

      const messageOptions = this._generateMessageOption()
      await interaction.update(messageOptions)
    })
  }

  private _generateMessageOption() {
    const maxIndex = this._embeds.length - 1

    const pageBackButton = new ButtonBuilder().setCustomId(CUSTOM_IDS.PAGE_BACK).setStyle(ButtonStyle.Secondary).setEmoji('◀').setDisabled(true)
    const pageNextButton = new ButtonBuilder().setCustomId(CUSTOM_IDS.PAGE_NEXT).setStyle(ButtonStyle.Secondary).setEmoji('▶')

    pageBackButton.setDisabled(this._pageIndex === 0)
    pageNextButton.setDisabled(this._pageIndex !== 0 && this._pageIndex === maxIndex)

    const messageOptions = WrapDataManager.toMessageOptions({
      components: [
        new ActionRowBuilder<ButtonBuilder>()
          .addComponents(pageBackButton)
          .addComponents(pageNextButton)
      ],
      embeds: [this._embeds[this._pageIndex]],
      files: []
    })

    if (this._pageIndex !== 0) {
      messageOptions.files = [this._attachments[this._pageIndex - 1]]
    }

    return messageOptions
  }
}