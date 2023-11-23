import { ColorResolvable, Colors, EmbedBuilder, WebhookClient } from 'discord.js'
import { IDS } from '~/constants/ids'
import { client } from '..'
import { Env } from './Env'

export default class Logger {
  public static error(content: string) {
    this._sendLog(content, Colors.Red, true)
    console.error(content)
  }

  public static warn(content: string) {
    this._sendLog(content, Colors.Yellow)
    console.warn(content)
  }

  public static info(content: string) {
    this._sendLog(content, Colors.Blue)
    console.info(content)
  }

  public static debug(content: string) {
    this._sendLog(content, Colors.Grey)
    console.debug(content)
  }

  private static async _sendLog(content: string, color: ColorResolvable, isMention: boolean = false) {
    const embed = new EmbedBuilder()
    embed.setDescription(content)
    embed.setTimestamp()
    embed.setColor(color)

    const webhook = new WebhookClient({ id: Env.logWebhookId, token: Env.logWebhookToken })
    await webhook.send({
      avatarURL: client.user?.avatarURL() ?? '',
      content: Env.isProd() && isMention ? `<@${IDS.BOT_OWNER_ID}>` : undefined,
      embeds: [embed],
      username: client.user?.tag ?? ''
    })
  }
}
