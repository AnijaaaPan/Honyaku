import { LocaleString } from 'discord.js'

export function getOnOffEmoji(isSet: boolean) {
  return isSet ? '✅' : '❌'
}

export function getLocaleName(locale: LocaleString) {
  switch (locale) {
    case 'id':
      return 'Indonesian'

    case 'en-US':
      return 'English, UK'

    case 'en-GB':
      return 'English, US'

    case 'bg':
      return 'български'

    case 'zh-CN':
      return '中文'

    case 'zh-TW':
      return '繁體中文'

    case 'hr':
      return 'Hrvatski'

    case 'cs':
      return 'Čeština'

    case 'da':
      return 'Dansk'

    case 'nl':
      return 'Nederlands'

    case 'fi':
      return 'Suomi'

    case 'fr':
      return 'Français'

    case 'de':
      return 'Deutsch'

    case 'el':
      return 'Ελληνικά'

    case 'hi':
      return 'हिंदी'

    case 'hu':
      return 'Magyar'

    case 'it':
      return 'български'

    case 'ja':
      return '日本語'

    case 'ko':
      return '한국어'

    case 'lt':
      return 'Lietuviškai'

    case 'no':
      return 'Norsk'

    case 'pl':
      return 'Polski'

    case 'pt-BR':
      return 'Português do Brasil'

    case 'ro':
      return 'Română'

    case 'ru':
      return 'Русский'

    case 'es-ES':
      return 'Español'

    case 'sv-SE':
      return 'Svenska'

    case 'th':
      return 'ไทย'

    case 'tr':
      return 'Türkçe'

    case 'uk':
      return 'Українська'

    case 'vi':
      return 'Tiếng Việt'
  }
}

export function getFlagEmoji(locale: LocaleString) {
  switch (locale) {
    case 'id':
      return '🇮🇩'

    case 'en-US':
      return '🇺🇸'

    case 'en-GB':
      return '🇬🇧'

    case 'bg':
      return '🇧🇬'

    case 'zh-CN':
      return '🇨🇳'

    case 'zh-TW':
      return '🇹🇼'

    case 'hr':
      return '🇭🇷'

    case 'cs':
      return '🇨🇿'

    case 'da':
      return '🇩🇰'

    case 'nl':
      return '🇳🇱'

    case 'fi':
      return '🇫🇮'

    case 'fr':
      return '🇫🇷'

    case 'de':
      return '🇩🇪'

    case 'el':
      return '🇬🇷'

    case 'hi':
      return '🇮🇳'

    case 'hu':
      return '🇭🇺'

    case 'it':
      return '🇮🇹'

    case 'ja':
      return '🇯🇵'

    case 'ko':
      return '🇰🇷'

    case 'lt':
      return '🇱🇹'

    case 'no':
      return '🇳🇴'

    case 'pl':
      return '🇵🇱'

    case 'pt-BR':
      return '🇵🇹'

    case 'ro':
      return '🇷🇴'

    case 'ru':
      return '🇷🇺'

    case 'es-ES':
      return '🇪🇸'

    case 'sv-SE':
      return '🇸🇪'

    case 'th':
      return '🇹🇭'

    case 'tr':
      return '🇹🇷'

    case 'uk':
      return '🇺🇦'

    case 'vi':
      return '🇻🇳'
  }
}