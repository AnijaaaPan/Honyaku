import { Guild, Locale } from 'discord.js'
import { I18n } from '~/assets/i18n'
import en from '~/assets/i18n/en'
import ja from '~/assets/i18n/ja'

export function lang(guild: Guild | null): I18n {
  const local = guild?.preferredLocale
  if (local === Locale.Japanese) return ja
  return en
}

export function langLocal(local?: Locale): I18n {
  if (local === Locale.Japanese) return ja
  return en
}