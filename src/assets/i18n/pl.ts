import WrapDataManager from '~/managers/WrapDataManager'

const pl = WrapDataManager.toI18n({
  commands: {
    language: {
      description: 'Ustaw język tłumaczenia',
      embed: {
        footer: {
          text: 'Maksymalna liczba ustawień językowych: {0} / {1}'
        },
        title: 'Ekran ustawień języka tłumaczenia:'
      },
      maxDataLength: '>>> **※Można ustawić maksymalnie {0} języków**'
    },
    translation: {
      content: '>>> **※Na jaki język przetłumaczyć?**',
      selectLang: '>>> **※Tłumaczenie na język {0}...**',
      undefined: '>>> **※Język tłumaczenia nie jest ustawiony\nUstaw go w `/setting`**'
    }
  },
  localizedNames: {
    bg: 'Bułgarski',
    cs: 'Czeski',
    da: 'Duński',
    de: 'Niemiecki',
    el: 'Grecki',
    'en-GB': 'Angielski, Wielka Brytania',
    'en-US': 'Angielski, USA',
    'es-ES': 'Hiszpański',
    fi: 'Fiński',
    fr: 'Francuski',
    hi: 'Hindi',
    hr: 'Chorwacki',
    hu: 'Węgierski',
    id: 'Indonezyjski',
    it: 'Włoski',
    ja: 'Japoński',
    ko: 'Koreański',
    lt: 'Litewski',
    nl: 'Holenderski',
    no: 'Norweski',
    pl: 'Polski',
    'pt-BR': 'Portugalski, Brazylia',
    ro: 'Rumuński',
    ru: 'Rosyjski',
    'sv-SE': 'Szwedzki',
    th: 'Tajski',
    tr: 'Turecki',
    uk: 'Ukraiński',
    vi: 'Wietnamski',
    'zh-CN': 'Chiński',
    'zh-TW': 'Chiński, Tajwan'
  }
})

export default pl