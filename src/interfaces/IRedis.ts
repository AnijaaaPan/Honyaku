import { LocaleString } from 'discord.js'
import { REDIS_KEYS } from '~/constants/redis'

export type RedisKeys = keyof typeof REDIS_KEYS

export interface Setting {
  isSet: boolean
  locale: LocaleString
}