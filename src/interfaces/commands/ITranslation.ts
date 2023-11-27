import { BaseMessageOptions } from 'discord.js'

export interface TranslationMessage {
  isTranslation: boolean
  lang: string
  messageOptions: BaseMessageOptions
}