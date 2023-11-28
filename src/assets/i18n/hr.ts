import WrapDataManager from '~/managers/WrapDataManager'

const hr = WrapDataManager.toI18n({
  commands: {
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