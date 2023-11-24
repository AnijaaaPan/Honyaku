import { Guild, Locale } from 'discord.js'
import { I18n } from '~/assets/i18n'
import ja from '~/assets/i18n/ja'

export function getI18n(local?: Locale) {
  return i18n(local)
}

export function getGuildI18n(guild: Guild | null) {
  const local = guild?.preferredLocale
  return i18n(local)
}

function i18n(local?: Locale): I18n {
  switch (local) {
    case Locale.Indonesian:
    case Locale.EnglishUS:
    case Locale.EnglishGB:
    case Locale.Bulgarian:
    case Locale.ChineseCN:
    case Locale.ChineseTW:
    case Locale.Croatian:
    case Locale.Czech:
    case Locale.Danish:
    case Locale.Dutch:
    case Locale.Finnish:
    case Locale.French:
    case Locale.German:
    case Locale.Greek:
    case Locale.Hindi:
    case Locale.Hungarian:
    case Locale.Italian:
    case Locale.Japanese:
    case Locale.Korean:
    case Locale.Lithuanian:
    case Locale.Norwegian:
    case Locale.Polish:
    case Locale.PortugueseBR:
    case Locale.Romanian:
    case Locale.Russian:
    case Locale.SpanishES:
    case Locale.Swedish:
    case Locale.Thai:
    case Locale.Turkish:
    case Locale.Ukrainian:
    case Locale.Vietnamese:
    case undefined:
      return ja
  }
}