import { LocaleString } from 'discord.js'
import { REDIS_KEYS, SubscribeTypes } from '~/constants/redis'

export type RedisKeys = keyof typeof REDIS_KEYS

export type subscribeTypeKeys = keyof typeof SubscribeTypes
export type subscribeTypeValues = typeof SubscribeTypes[subscribeTypeKeys]

export interface Setting {
  subscribeType: subscribeTypeValues
  languages: Language[]
}

export interface Language {
  isSet: boolean
  locale: LocaleString
}
