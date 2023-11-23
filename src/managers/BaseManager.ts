import { Guild, GuildBasedChannel, GuildMember, Role, TextChannel, User } from 'discord.js'
import { errorHandling } from '~/handlers/unhandledRejection'
import { client } from '..'

export default abstract class BaseManager {
  protected abstract main(...args: any[]): Promise<void>

  public async execute(...args: any[]) {
    try {
      await this.main(...args)

    } catch (error) {
      await this.handleError(error as Error)
    }
  }

  protected async handleError(error: Error) {
    await errorHandling(error)
  }

  protected format(str: string, ...args: unknown[]) {
    for (const [i, arg] of args.entries()) {
      const regExp = new RegExp(`\\{${i}\\}`, 'g')
      str = str.replace(regExp, arg as string)
    }
    return str
  }

  protected async getWebhook(channelId: string, guild?: Guild | null) {
    const channel = await this.getChannel<TextChannel>(channelId, guild)
    if (!channel) return

    const webhooks = await channel.fetchWebhooks()
    const webhook = webhooks.first()
    return webhook
  }

  public async getGuild<T extends Guild>(guildId: string) {
    const getGuild = client?.guilds.cache.get(guildId)
    if (getGuild) {
      return (getGuild as T) ?? undefined
    }

    const fetchGuild = await client?.guilds.fetch(guildId).catch(() => { })
    return (fetchGuild as T) ?? undefined
  }

  protected async getChannel<T extends GuildBasedChannel>(channelId?: string, guild?: Guild | null) {
    const manager = guild ?? client
    const getChannel = manager?.channels.cache.get(channelId ?? '')
    if (getChannel) {
      return (getChannel as T) ?? undefined
    }

    const fetchchannel = await manager?.channels.fetch(channelId ?? '').catch(() => { })
    return (fetchchannel as T) ?? undefined
  }

  protected async getUser<T extends User | GuildMember>(userId?: string | null, guild?: Guild | null) {
    const users = guild ? guild.members : client.users
    const getUser = users.cache.get(userId ?? '')
    if (getUser) {
      return (getUser as T) ?? undefined
    }

    const fetchUser = await users.fetch(userId ?? '').catch(() => { })
    return (fetchUser as T) ?? undefined
  }

  protected async getRole<T extends Role>(roleId?: string | null, guild?: Guild | null) {
    const getRole = guild?.roles.cache.get(roleId ?? '')
    if (getRole) {
      return (getRole as T) ?? undefined
    }

    const fetchRole = await guild?.roles.fetch(roleId ?? '').catch(() => { })
    return (fetchRole as T) ?? undefined
  }
}