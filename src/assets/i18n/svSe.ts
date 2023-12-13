import WrapDataManager from '~/managers/WrapDataManager'

const svSe = WrapDataManager.toI18n({
  commands: {
    help: {
      description: 'Hur man använder BOT',
      embeds: [{
        contents: ['För närvarande valt språk', 'Flytta upp', 'Flytta ner', 'Aktivera språk', 'Inaktivera språk'],
        description: '**`/setting` Kan konfigureras via kommandot**',
        footer: {
          text: '※Detta kommando kan endast användas om du har fulla behörigheter'
        },
        title: 'Metod för språkinställning:'
      }, {
        contents: ['Högerklick', 'Klick'],
        type: 'PC'
      }, {
        contents: ['Långtryck', 'Tryck'],
        type: 'Smarttelefon'
      }],
      howToUseEmbed: {
        contents: ['Välj meddelandet du vill översätta {0}', '`App` för {0}', '`Översätt` för {0}', 'Välj önskat språk {0}', 'Översättningen är klar'],
        description: 'Steg:',
        title: 'Hur man använder ({0}):'
      }
    },
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