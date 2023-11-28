import WrapDataManager from '~/managers/WrapDataManager'

const da = WrapDataManager.toI18n({
  commands: {
    language: {
      description: 'Indstil sprog til oversættelse',
      embed: {
        footer: {
          text: 'Maksimalt antal sprogindstillinger: {0} / {1}'
        },
        title: 'Skærm for indstilling af oversættelsessprog:'
      },
      maxDataLength: '>>> **※Kan kun indstille op til {0} sprog**'
    },
    translation: {
      content: '>>> **※Hvilket sprog skal oversættes til?**',
      selectLang: '>>> **※Oversætter til {0}...**',
      undefined: '>>> **※Oversættelsessprog er ikke indstillet\nIndstil det i `/setting`**'
    }
  },
  localizedNames: {
    bg: 'Bulgarsk',
    cs: 'Tjekkisk',
    da: 'Dansk',
    de: 'Tysk',
    el: 'Græsk',
    'en-GB': 'Engelsk, UK',
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
    nl: 'Hollandsk',
    no: 'Norsk',
    pl: 'Polsk',
    'pt-BR': 'Portugisisk, Brasilien',
    ro: 'Rumænsk',
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

export default da