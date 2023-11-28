import WrapDataManager from '~/managers/WrapDataManager'

const nl = WrapDataManager.toI18n({
  commands: {
    language: {
      description: 'Stel de taal voor vertaling in',
      embed: {
        footer: {
          text: 'Maximaal aantal taalinstellingen: {0} / {1}'
        },
        title: 'Scherm voor het instellen van de vertaaltaal:'
      },
      maxDataLength: '>>> **※Kan maximaal {0} talen instellen**'
    },
    translation: {
      content: '>>> **※Naar welke taal vertalen?**',
      selectLang: '>>> **※Vertalen naar {0}...**',
      undefined: '>>> **※Vertaaltaal is niet ingesteld\nStel deze in bij `/setting`**'
    }
  },
  localizedNames: {
    bg: 'Bulgaars',
    cs: 'Tsjechisch',
    da: 'Deens',
    de: 'Duits',
    el: 'Grieks',
    'en-GB': 'Engels, VK',
    'en-US': 'Engels, VS',
    'es-ES': 'Spaans',
    fi: 'Fins',
    fr: 'Frans',
    hi: 'Hindi',
    hr: 'Kroatisch',
    hu: 'Hongaars',
    id: 'Indonesisch',
    it: 'Italiaans',
    ja: 'Japans',
    ko: 'Koreaans',
    lt: 'Litouws',
    nl: 'Nederlands',
    no: 'Noors',
    pl: 'Pools',
    'pt-BR': 'Portugees, Brazilië',
    ro: 'Roemeens',
    ru: 'Russisch',
    'sv-SE': 'Zweeds',
    th: 'Thais',
    tr: 'Turks',
    uk: 'Oekraïens',
    vi: 'Vietnamees',
    'zh-CN': 'Chinees',
    'zh-TW': 'Chinees, Taiwan'
  }
})

export default nl