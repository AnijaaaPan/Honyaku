import { ActionRowBuilder, BaseMessageOptions, ButtonBuilder, ButtonInteraction, ButtonStyle, ChatInputCommandInteraction, ComponentType, Guild, GuildMember, InteractionReplyOptions, MessageContextMenuCommandInteraction, TextBasedChannel, User } from 'discord.js'
import { I18n } from '~/assets/i18n'
import { CUSTOM_IDS } from '~/constants/ids'
import { CustomError } from '~/interfaces/IError'
import Logger from '~/lib/Logger'
import { getGuildI18n } from '~/utils/discord'
import WrapDataManager from '../generals/WrapDataManager'

export default class CommandManager<T extends ChatInputCommandInteraction | ButtonInteraction | MessageContextMenuCommandInteraction> {
  public i18n: I18n
  public channel: TextBasedChannel | null
  public channelId: string
  public guild: Guild | null
  public guildId: string
  public member: GuildMember
  public user: User
  public userId: string
  private _isError = WrapDataManager.castToType<boolean>(false)

  constructor(public interaction: T) {
    this.i18n = getGuildI18n(interaction.guild)
    this.channel = interaction.channel
    this.channelId = this.channel?.id ?? ''
    this.guild = interaction.guild
    this.guildId = this.guild?.id ?? ''
    this.member = WrapDataManager.castToType<GuildMember>(this.interaction.member)
    this.user = interaction.user
    this.userId = this.user.id
  }

  public async updateMessage(messageOptions: InteractionReplyOptions) {
    if (!this.interaction) return

    if (this.interaction.replied || this.interaction.deferred) {
      await this.interaction.editReply(messageOptions)
    } else {
      await this.interaction.reply(messageOptions)
    }
  }

  public async messagePaginate(messages: BaseMessageOptions[]) {
    let pageIndex = 0
    const maxIndex = messages.length - 1

    const interactionReplyOptions = WrapDataManager.toInteractionReplyOptions({
      ...messages[pageIndex],
      ephemeral: true
    })
    const buttons = this._embedPaginateButtons(messages, pageIndex)
    if (buttons.length !== 0) {
      interactionReplyOptions.components = [new ActionRowBuilder<ButtonBuilder>().addComponents(buttons)]
    }
    await this.updateMessage(interactionReplyOptions)

    const filter = (i: ButtonInteraction) => {
      return i.user.id === this.userId
    }

    const collector = this.channel?.createMessageComponentCollector({
      componentType: ComponentType.Button,
      filter,
      idle: 30000
    })

    collector?.on('collect', async (i) => {
      if (i.customId === CUSTOM_IDS.PAGE_INITIAL) {
        pageIndex = 0
      } else if (i.customId === CUSTOM_IDS.PAGE_BACK) {
        pageIndex--
      } else if (i.customId === CUSTOM_IDS.PAGE_NEXT) {
        pageIndex++
      } else if (i.customId === CUSTOM_IDS.PAGE_END) {
        pageIndex = maxIndex
      } else {
        const interactionReplyOptions = WrapDataManager.toInteractionUpdateOptions({
          ...messages[pageIndex],
          components: []
        })
        await i.update(interactionReplyOptions)
        collector?.stop()
        return
      }

      const buttons = this._embedPaginateButtons(messages, pageIndex)
      const interactionReplyOptions = WrapDataManager.toInteractionUpdateOptions({
        ...messages[pageIndex],
        components: [new ActionRowBuilder<ButtonBuilder>().addComponents(buttons)],
      })
      await i.update(interactionReplyOptions)
    })
  }

  private _embedPaginateButtons(messages: InteractionReplyOptions[], index: number) {
    const buttons = WrapDataManager.castToType<ButtonBuilder[]>([])
    if (messages.length !== 0) {
      const pageInitialButton = new ButtonBuilder().setCustomId(CUSTOM_IDS.PAGE_INITIAL).setStyle(ButtonStyle.Secondary).setEmoji('⏪')
      const pageBackButton = new ButtonBuilder().setCustomId(CUSTOM_IDS.PAGE_BACK).setStyle(ButtonStyle.Secondary).setEmoji('◀')
      const pageNextButton = new ButtonBuilder().setCustomId(CUSTOM_IDS.PAGE_NEXT).setStyle(ButtonStyle.Secondary).setEmoji('▶')
      const pageEndButton = new ButtonBuilder().setCustomId(CUSTOM_IDS.PAGE_END).setStyle(ButtonStyle.Secondary).setEmoji('⏩')

      pageInitialButton.setDisabled(index === 0)
      pageBackButton.setDisabled(index === 0)
      pageNextButton.setDisabled(index !== 0)
      pageEndButton.setDisabled(index !== 0)
      buttons.push(pageInitialButton, pageBackButton, pageNextButton, pageEndButton)
    }
    return buttons
  }

  public async onError(error: Error) {
    if (this._isError) return
    this._isError = true

    if (!this._isCustomError(error)) {
      Logger.error(`\`\`\`js\n${error.stack}\`\`\``)
      throw error
    }

    const { interactionReplyOptions } = error
    const newInteractionReplyOptions = { ...interactionReplyOptions, ephemeral: true }
    await this.updateMessage(newInteractionReplyOptions)
    throw error
  }

  private _isCustomError(error: Error): error is CustomError {
    return 'interactionReplyOptions' in error
  }
}