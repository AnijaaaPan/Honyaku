import WrapDataManager from '~/managers/WrapDataManager'

const de = WrapDataManager.toI18n({
  commands: {
    language: {
      description: 'Übersetzungssprache einstellen',
      embed: {
        footer: {
          text: 'Maximale Anzahl von Spracheinstellungen: {0} / {1}'
        },
        title: 'Einstellungsbildschirm für Übersetzungssprache:'
      },
      maxDataLength: '>>> **※Kann maximal {0} Sprachen einstellen**'
    },
    translation: {
      content: '>>> **※In welche Sprache übersetzen?**',
      selectLang: '>>> **※Übersetzung in {0}...**',
      undefined: '>>> **※Übersetzungssprache ist nicht eingestellt\nBitte in `/setting` einstellen**'
    }
  },
  localizedNames: {
    bg: 'Bulgarisch',
    cs: 'Tschechisch',
    da: 'Dänisch',
    de: 'Deutsch',
    el: 'Griechisch',
    'en-GB': 'Englisch, UK',
    'en-US': 'Englisch, USA',
    'es-ES': 'Spanisch',
    fi: 'Finnisch',
    fr: 'Französisch',
    hi: 'Hindi',
    hr: 'Kroatisch',
    hu: 'Ungarisch',
    id: 'Indonesisch',
    it: 'Italienisch',
    ja: 'Japanisch',
    ko: 'Koreanisch',
    lt: 'Litauisch',
    nl: 'Niederländisch',
    no: 'Norwegisch',
    pl: 'Polnisch',
    'pt-BR': 'Portugiesisch, Brasilien',
    ro: 'Rumänisch',
    ru: 'Russisch',
    'sv-SE': 'Schwedisch',
    th: 'Thailändisch',
    tr: 'Türkisch',
    uk: 'Ukrainisch',
    vi: 'Vietnamesisch',
    'zh-CN': 'Chinesisch',
    'zh-TW': 'Chinesisch, Taiwan'
  }
})

export default de