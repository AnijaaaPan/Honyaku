import { Guild, Locale } from 'discord.js'
import bg from '~/assets/i18n/bg'
import cs from '~/assets/i18n/cs'
import da from '~/assets/i18n/da'
import de from '~/assets/i18n/de'
import el from '~/assets/i18n/el'
import enGb from '~/assets/i18n/enGb'
import enUs from '~/assets/i18n/enUs'
import fi from '~/assets/i18n/fi'
import fr from '~/assets/i18n/fr'
import hi from '~/assets/i18n/hi'
import hr from '~/assets/i18n/hr'
import hu from '~/assets/i18n/hu'
import id from '~/assets/i18n/id'
import it from '~/assets/i18n/it'
import ja from '~/assets/i18n/ja'
import ko from '~/assets/i18n/ko'
import lt from '~/assets/i18n/lt'
import nl from '~/assets/i18n/nl'
import no from '~/assets/i18n/no'
import pl from '~/assets/i18n/pl'
import pt from '~/assets/i18n/pt'
import ro from '~/assets/i18n/ro'
import zhCn from '~/assets/i18n/zhCn'
import zhTw from '~/assets/i18n/zhTw'
import { I18n } from '~/interfaces/II18n'

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
      return id
    case Locale.EnglishUS:
      return enUs
    case Locale.EnglishGB:
      return enGb
    case Locale.Bulgarian:
      return bg
    case Locale.ChineseCN:
      return zhCn
    case Locale.ChineseTW:
      return zhTw
    case Locale.Croatian:
      return hr
    case Locale.Czech:
      return cs
    case Locale.Danish:
      return da
    case Locale.Dutch:
      return nl
    case Locale.Finnish:
      return fi
    case Locale.French:
      return fr
    case Locale.German:
      return de
    case Locale.Greek:
      return el
    case Locale.Hindi:
      return hi
    case Locale.Hungarian:
      return hu
    case Locale.Italian:
      return it
    case Locale.Japanese:
      return ja
    case Locale.Korean:
      return ko
    case Locale.Lithuanian:
      return lt
    case Locale.Norwegian:
      return no
    case Locale.Polish:
      return pl
    case Locale.PortugueseBR:
      return pt
    case Locale.Romanian:
      return ro
    case Locale.Russian:

    case Locale.SpanishES:

    case Locale.Swedish:

    case Locale.Thai:

    case Locale.Turkish:

    case Locale.Ukrainian:

    case Locale.Vietnamese:

    case undefined:
      return enUs
  }
}