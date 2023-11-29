import WrapDataManager from '~/managers/WrapDataManager'

const tr = WrapDataManager.toI18n({
  commands: {
    language: {
      description: 'Çeviri dili ayarlayın',
      embed: {
        footer: {
          text: 'Maksimum dil ayar sayısı: {0} / {1}'
        },
        title: 'Çeviri dili ayarlama ekranı:'
      },
      maxDataLength: '>>> **※Maksimum {0} dil ayarlanabilir**'
    },
    translation: {
      content: '>>> **※Hangi dile çevrilsin?**',
      selectLang: '>>> **※{0} diline çevriliyor...**',
      undefined: '>>> **※Çeviri dili ayarlanmamış\nLütfen `/setting`de ayarlayın**'
    }
  },
  localizedNames: {
    bg: 'Bulgarca',
    cs: 'Çekçe',
    da: 'Danca',
    de: 'Almanca',
    el: 'Yunanca',
    'en-GB': 'İngilizce, Birleşik Krallık',
    'en-US': 'İngilizce, ABD',
    'es-ES': 'İspanyolca',
    fi: 'Fince',
    fr: 'Fransızca',
    hi: 'Hintçe',
    hr: 'Hırvatça',
    hu: 'Macarca',
    id: 'Endonezce',
    it: 'İtalyanca',
    ja: 'Japonca',
    ko: 'Korece',
    lt: 'Litvanca',
    nl: 'Hollandaca',
    no: 'Norveççe',
    pl: 'Lehçe',
    'pt-BR': 'Portekizce, Brezilya',
    ro: 'Romence',
    ru: 'Rusça',
    'sv-SE': 'İsveççe',
    th: 'Tayca',
    tr: 'Türkçe',
    uk: 'Ukraynaca',
    vi: 'Vietnamca',
    'zh-CN': 'Çince',
    'zh-TW': 'Çince, Tayvan'
  }
})

export default tr