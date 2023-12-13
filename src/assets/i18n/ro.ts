import WrapDataManager from '~/managers/WrapDataManager'

const ro = WrapDataManager.toI18n({
  commands: {
    help: {
      description: 'Cum să folosești BOT-ul',
      embeds: [{
        contents: ['Limba selectată în prezent', 'Mută în sus', 'Mută în jos', 'Activează limba', 'Dezactivează limba'],
        description: '**</setting:{0}> Se poate configura prin comandă**',
        footer: {
          text: '※Această comandă poate fi utilizată doar dacă aveți permisiuni complete'
        },
        title: 'Metoda de setare a limbii:'
      }, {
        contents: ['Clic dreapta', 'Clic'],
        type: 'PC'
      }, {
        contents: ['Apăsare lungă', 'Atingere'],
        type: 'Smartphone'
      }],
      howToUseEmbed: {
        contents: ['Selectează mesajul pe care dorești să-l traduci {0}', '`Aplicație` pentru {0}', '`Traduce` pentru {0}', 'Selectează limba dorită {0}', 'Traducerea completată'],
        description: 'Pași:',
        title: 'Cum să folosești ({0}):'
      }
    },
    language: {
      description: 'Setați limba de traducere',
      embed: {
        footer: {
          text: 'Numărul maxim de setări ale limbii: {0} / {1}'
        },
        title: 'Ecran de setare a limbii de traducere:'
      },
      maxDataLength: '>>> **※Puteți seta maxim {0} limbi**'
    },
    translation: {
      content: '>>> **※În ce limbă să traduceți?**',
      selectLang: '>>> **※Traducere în curs în {0}...**',
      undefined: '>>> **※Limba de traducere nu este setată\nVă rugăm să o setați în `/setting`**'
    }
  },
  localizedNames: {
    bg: 'Bulgară',
    cs: 'Cehă',
    da: 'Daneză',
    de: 'Germană',
    el: 'Greacă',
    'en-GB': 'Engleză, Marea Britanie',
    'en-US': 'Engleză, SUA',
    'es-ES': 'Spaniolă',
    fi: 'Finlandeză',
    fr: 'Franceză',
    hi: 'Hindi',
    hr: 'Croată',
    hu: 'Maghiară',
    id: 'Indoneziană',
    it: 'Italiană',
    ja: 'Japoneză',
    ko: 'Coreeană',
    lt: 'Lituaniană',
    nl: 'Olandeză',
    no: 'Norvegiană',
    pl: 'Poloneză',
    'pt-BR': 'Portugheză, Brazilia',
    ro: 'Română',
    ru: 'Rusă',
    'sv-SE': 'Suedeză',
    th: 'Tailandeză',
    tr: 'Turcă',
    uk: 'Ucraineană',
    vi: 'Vietnameză',
    'zh-CN': 'Chineză',
    'zh-TW': 'Chineză, Taiwan'
  }
})

export default ro