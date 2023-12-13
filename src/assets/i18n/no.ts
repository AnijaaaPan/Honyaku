import WrapDataManager from '~/managers/WrapDataManager'

const no = WrapDataManager.toI18n({
  commands: {
    help: {
      description: 'Slik bruker du BOT',
      embeds: [{
        contents: ['Gjeldende valgt språk', 'Flytt opp', 'Flytt ned', 'Aktiver språk', 'Deaktiver språk'],
        description: '**</setting:{0}> Kan settes via kommandoen**',
        footer: {
          text: '※Denne kommandoen kan bare brukes hvis du har full tilgang'
        },
        title: 'Metode for språkinnstilling:'
      }, {
        contents: ['Høyreklikk', 'Klikk'],
        type: 'PC'
      }, {
        contents: ['Langtrykk', 'Trykk'],
        type: 'Smarttelefon'
      }],
      howToUseEmbed: {
        contents: ['Velg meldingen du vil oversette {0}', '`App` for {0}', '`Oversett` for {0}', 'Velg ønsket språk {0}', 'Oversettelse fullført'],
        description: 'Trinn:',
        title: 'Bruksanvisning ({0}):'
      }
    },
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