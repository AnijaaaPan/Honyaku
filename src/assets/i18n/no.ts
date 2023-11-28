import WrapDataManager from '~/managers/WrapDataManager'

const no = WrapDataManager.toI18n({
  commands: {
    language: {
      description: 'Angi språk for oversettelse',
      embed: {
        footer: {
          text: 'Maksimalt antall språkinnstillinger: {0} / {1}'
        },
        title: 'Skjermbilde for innstilling av oversettelsesspråk:'
      },
      maxDataLength: '>>> **※Kan bare sette opp til {0} språk**'
    },
    translation: {
      content: '>>> **※Hvilket språk skal det oversettes til?**',
      selectLang: '>>> **※Oversetter til {0}...**',
      undefined: '>>> **※Oversettelsesspråket er ikke satt\nVennligst sett det i `/setting`**'
    }
  },
  localizedNames: {
    bg: 'Bulgarsk',
    cs: 'Tsjekkisk',
    da: 'Dansk',
    de: 'Tysk',
    el: 'Gresk',
    'en-GB': 'Engelsk, Storbritannia',
    'en-US': 'Engelsk, USA',
    'es-ES': 'Spansk',
    fi: 'Finsk',
    fr: 'Fransk',
    hi: 'Hindi',
    hr: 'Kroatisk',
    hu: 'Ungarsk',
    id: 'Indonesisk',
    it: 'Italiensk',
    ja: 'Japansk',
    ko: 'Koreansk',
    lt: 'Litauisk',
    nl: 'Nederlandsk',
    no: 'Norsk',
    pl: 'Polsk',
    'pt-BR': 'Portugisisk, Brasil',
    ro: 'Rumensk',
    ru: 'Russisk',
    'sv-SE': 'Svensk',
    th: 'Thai',
    tr: 'Tyrkisk',
    uk: 'Ukrainsk',
    vi: 'Vietnamesisk',
    'zh-CN': 'Kinesisk',
    'zh-TW': 'Kinesisk, Taiwan'
  }
})

export default no