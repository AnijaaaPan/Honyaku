import { Guild, GuildMember, Interaction, InteractionReplyOptions, TextBasedChannel, User } from 'discord.js'
import { I18n } from '~/assets/i18n'
import { CustomError } from '~/interfaces/IError'
import Logger from '~/lib/Logger'
import { getGuildI18n } from '~/utils/discord'
import WrapDataManager from './WrapDataManager'

export default class CommandManager {
  public i18n: I18n
  public channel: TextBasedChannel | null
  public channelId: string
  public guild: Guild | null
  public guildId: string
  public member: GuildMember
  public user: User
  public userId: string
  private _isError = WrapDataManager.castToType<boolean>(false)

  constructor(public interaction: Interaction) {
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
    if (!this.interaction || !this.interaction.isCommand()) return
    if (this.interaction.replied || this.interaction.deferred) {
      await this.interaction.editReply(messageOptions)
    } else {
      await this.interaction.reply(messageOptions)
    }
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