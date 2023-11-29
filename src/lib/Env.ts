/* eslint-disable no-undef */

import dotenv from 'dotenv'
import { ProjectTypes } from '~/constants/types'
import { CustomError } from '~/interfaces/IError'
dotenv.config()

export class Env {
  public static get type() {
    return this._getEnv('TYPE')
  }

  public static get redisUrl() {
    return this._getEnv('REDIS_URL')
  }

  public static get token() {
    return this._getEnv('TOKEN')
  }

  public static get logWebhookId() {
    return this._getEnv('LOG_WEBHOOK_ID')
  }

  public static get logWebhookToken() {
    return this._getEnv('LOG_WEBHOOK_TOKEN')
  }

  public static get deeplAuthKey() {
    return this._getEnv('DEEPL_AUTH_KEY')
  }

  public static get googleProjectId() {
    return this._getEnv('GOOGLE_PROJECT_ID')
  }

  public static get googleLocation() {
    return this._getEnv('GOOGLE_LOCATION')
  }

  public static isProd() {
    return this.type === ProjectTypes.PROD
  }

  public static isDev() {
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