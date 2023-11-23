/* eslint-disable no-undef */

import dotenv from 'dotenv'
import { ProjectTypes } from '~/constants/types'
import { CustomError } from '~/interfaces/IError'
dotenv.config()

export class Env {
  public static get type(): string {
    return this._getEnv('TYPE')
  }

  public static get redisUrl(): string {
    return this._getEnv('REDIS_URL')
  }

  public static get token(): string {
    return this._getEnv('TOKEN')
  }

  public static get logWebhookId(): string {
    return this._getEnv('LOG_WEBHOOK_ID')
  }

  public static get logWebhookToken(): string {
    return this._getEnv('LOG_WEBHOOK_TOKEN')
  }

  public static isProd(): boolean {
    return this.type === ProjectTypes.PROD
  }

  public static isDev(): boolean {
    return this.type === ProjectTypes.DEV
  }

  private static _getEnv(value: string) {
    const getValue = process.env[value]
    if (!getValue) {
      throw new CustomError({ content: `- **※.envにて${value}が設定されておりません**` })
    }
    return getValue
  }
}