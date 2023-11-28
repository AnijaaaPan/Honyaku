import WrapDataManager from '~/managers/WrapDataManager'

const id = WrapDataManager.toI18n({
  commands: {
    language: {
      description: 'Atur bahasa terjemahan',
      embed: {
        footer: {
          text: 'Jumlah maksimum pengaturan bahasa: {0} / {1}'
        },
        title: 'Layar pengaturan bahasa terjemahan:'
      },
      maxDataLength: '>>> **※Hanya dapat mengatur hingga {0} bahasa**'
    },
    translation: {
      content: '>>> **※Bahasa apa yang akan diterjemahkan?**',
      selectLang: '>>> **※Sedang menerjemahkan ke {0}...**',
      undefined: '>>> **※Bahasa terjemahan belum diatur\nSilakan atur di `/setting`**'
    }
  },
  localizedNames: {
    bg: 'Bahasa Bulgaria',
    cs: 'Bahasa Ceko',
    da: 'Bahasa Denmark',
    de: 'Bahasa Jerman',
    el: 'Bahasa Yunani',
    'en-GB': 'Bahasa Inggris, Inggris',
    'en-US': 'Bahasa Inggris, Amerika',
    'es-ES': 'Bahasa Spanyol',
    fi: 'Bahasa Finlandia',
    fr: 'Bahasa Perancis',
    hi: 'Bahasa Hindi',
    hr: 'Bahasa Kroasia',
    hu: 'Bahasa Hongaria',
    id: 'Bahasa Indonesia',
    it: 'Bahasa Italia',
    ja: 'Bahasa Jepang',
    ko: 'Bahasa Korea',
    lt: 'Bahasa Lituania',
    nl: 'Bahasa Belanda',
    no: 'Bahasa Norwegia',
    pl: 'Bahasa Polandia',
    'pt-BR': 'Bahasa Portugis, Brasil',
    ro: 'Bahasa Rumania',
    ru: 'Bahasa Rusia',
    'sv-SE': 'Bahasa Swedia',
    th: 'Bahasa Thailand',
    tr: 'Bahasa Turki',
    uk: 'Bahasa Ukraina',
    vi: 'Bahasa Vietnam',
    'zh-CN': 'Bahasa Cina',
    'zh-TW': 'Bahasa Cina, Taiwan'
  }
})

export default id