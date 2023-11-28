import WrapDataManager from '~/managers/WrapDataManager'

const cs = WrapDataManager.toI18n({
  commands: {
    language: {
      description: 'Nastavte jazyk pro překlad',
      embed: {
        footer: {
          text: 'Maximální počet jazykových nastavení: {0} / {1}'
        },
        title: 'Obrazovka nastavení jazyka překladu:'
      },
      maxDataLength: '>>> **※Lze nastavit maximálně {0} jazyků**'
    },
    translation: {
      content: '>>> **※Do jakého jazyka přeložit?**',
      selectLang: '>>> **※Překládá se do {0}...**',
      undefined: '>>> **※Jazyk pro překlad není nastaven\nNastavte jej v `/setting`**'
    }
  },
  localizedNames: {
    bg: 'Bulharština',
    cs: 'Čeština',
    da: 'Dánština',
    de: 'Němčina',
    el: 'Řečtina',
    'en-GB': 'Angličtina, UK',
    'en-US': 'Angličtina, USA',
    'es-ES': 'Španělština',
    fi: 'Finština',
    fr: 'Francouzština',
    hi: 'Hindština',
    hr: 'Chorvatština',
    hu: 'Maďarština',
    id: 'Indonéština',
    it: 'Italština',
    ja: 'Japonština',
    ko: 'Korejština',
    lt: 'Litevština',
    nl: 'Nizozemština',
    no: 'Norština',
    pl: 'Polština',
    'pt-BR': 'Portugalština, Brazílie',
    ro: 'Rumunština',
    ru: 'Ruština',
    'sv-SE': 'Švédština',
    th: 'Thajština',
    tr: 'Turečtina',
    uk: 'Ukrajinština',
    vi: 'Vietnamština',
    'zh-CN': 'Čínština',
    'zh-TW': 'Čínština, Tchaj-wan'
  }
})

export default cs