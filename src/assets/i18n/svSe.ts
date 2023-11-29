import WrapDataManager from '~/managers/WrapDataManager'

const svSe = WrapDataManager.toI18n({
  commands: {
    language: {
      description: 'Ställ in översättningsspråk',
      embed: {
        footer: {
          text: 'Maximalt antal språkinställningar: {0} / {1}'
        },
        title: 'Skärm för inställning av översättningsspråk:'
      },
      maxDataLength: '>>> **※Kan endast ställa in upp till {0} språk**'
    },
    translation: {
      content: '>>> **※Vilket språk ska översättas till?**',
      selectLang: '>>> **※Översätter till {0}...**',
      undefined: '>>> **※Översättningsspråket är inte inställt\nStäll in det i `/setting`**'
    }
  },
  localizedNames: {
    bg: 'Bulgariska',
    cs: 'Tjeckiska',
    da: 'Danska',
    de: 'Tyska',
    el: 'Grekiska',
    'en-GB': 'Engelska, Storbritannien',
    'en-US': 'Engelska, USA',
    'es-ES': 'Spanska',
    fi: 'Finska',
    fr: 'Franska',
    hi: 'Hindi',
    hr: 'Kroatiska',
    hu: 'Ungerska',
    id: 'Indonesiska',
    it: 'Italienska',
    ja: 'Japanska',
    ko: 'Koreanska',
    lt: 'Litauiska',
    nl: 'Holländska',
    no: 'Norska',
    pl: 'Polska',
    'pt-BR': 'Portugisiska, Brasilien',
    ro: 'Rumänska',
    ru: 'Ryska',
    'sv-SE': 'Svenska',
    th: 'Thailändska',
    tr: 'Turkiska',
    uk: 'Ukrainska',
    vi: 'Vietnamesiska',
    'zh-CN': 'Kinesiska',
    'zh-TW': 'Kinesiska, Taiwan'
  }
})

export default svSe