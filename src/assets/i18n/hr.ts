import WrapDataManager from '~/managers/WrapDataManager'

const hr = WrapDataManager.toI18n({
  commands: {
    help: {
      description: 'Kako koristiti BOT',
      embeds: [{
        contents: ['Trenutno odabrani jezik', 'Pomicanje prema gore', 'Pomicanje prema dolje', 'Aktiviranje jezika', 'Deaktiviranje jezika'],
        description: '**</setting:{0}> Može se postaviti putem naredbe**',
        footer: {
          text: '※Ova naredba može se koristiti samo ako imate pune ovlasti'
        },
        title: 'Metoda postavljanja jezika:'
      }, {
        contents: ['Desni klik', 'Klik'],
        type: 'PC'
      }, {
        contents: ['Dugi pritisak', 'Dodir'],
        type: 'Smartphone'
      }],
      howToUseEmbed: {
        contents: ['Odaberite poruku koju želite prevesti {0}', '`Aplikacija` za {0}', '`Prevedi` za {0}', 'Odaberite željeni jezik {0}', 'Prijevod završen'],
        description: 'Koraci:',
        title: 'Kako koristiti ({0}):'
      }
    },
    language: {
      description: 'Postavite jezik za prijevod',
      embed: {
        footer: {
          text: 'Maksimalni broj postavki jezika: {0} / {1}'
        },
        title: 'Ekran postavki jezika za prijevod:'
      },
      maxDataLength: '>>> **※Možete postaviti najviše {0} jezika**'
    },
    translation: {
      content: '>>> **※Na koji jezik prevoditi?**',
      selectLang: '>>> **※Prevodi se na {0}...**',
      undefined: '>>> **※Jezik za prijevod nije postavljen\nPostavite ga u `/setting`**'
    }
  },
  localizedNames: {
    bg: 'Bugarski',
    cs: 'Češki',
    da: 'Danski',
    de: 'Njemački',
    el: 'Grčki',
    'en-GB': 'Engleski, UK',
    'en-US': 'Engleski, SAD',
    'es-ES': 'Španjolski',
    fi: 'Finski',
    fr: 'Francuski',
    hi: 'Hindski',
    hr: 'Hrvatski',
    hu: 'Mađarski',
    id: 'Indonezijski',
    it: 'Talijanski',
    ja: 'Japanski',
    ko: 'Korejski',
    lt: 'Litvanski',
    nl: 'Nizozemski',
    no: 'Norveški',
    pl: 'Poljski',
    'pt-BR': 'Portugalski, Brazil',
    ro: 'Rumunjski',
    ru: 'Ruski',
    'sv-SE': 'Švedski',
    th: 'Tajlandski',
    tr: 'Turski',
    uk: 'Ukrajinski',
    vi: 'Vijetnamski',
    'zh-CN': 'Kineski',
    'zh-TW': 'Kineski, Tajvan'
  }
})

export default hr