import WrapDataManager from '~/managers/WrapDataManager'

const cs = WrapDataManager.toI18n({
  commands: {
    help: {
      description: 'Návod k použití BOT',
      embeds: [{
        contents: ['Aktuálně vybraný jazyk', 'Přesunout nahoru', 'Přesunout dolů', 'Aktivovat jazyk', 'Deaktivovat jazyk'],
        description: '**`/setting` Nastavit lze pomocí příkazu**',
        footer: {
          text: '※Tento příkaz lze použít pouze s plnými právy'
        },
        title: 'Metoda nastavení jazyka:'
      }, {
        contents: ['Pravý klik', 'Kliknutí'],
        type: 'PC'
      }, {
        contents: ['Dlouhé stisknutí', 'Klepnutí'],
        type: 'Mobilní telefon'
      }],
      howToUseEmbed: {
        contents: ['Vyberte zprávu, kterou chcete přeložit {0}', '`Aplikace` pro {0}', '`Přeložit` pro {0}', 'Vyberte požadovaný jazyk {0}', 'Překlad dokončen'],
        description: 'Kroky:',
        title: 'Jak používat ({0}):'
      }
    },
    language: {
      description: 'Nastavte jazyk pro překlad',
      embed: {
        footer: {
          text: 'Maximální počet jazykových nastavení: {0} / {1}'
        },
        title: 'Obrazovka nastavení jazyka překladu:'
      },
      maxDataLength: '>>> **※Lze nastavit maximálně {0} jazyků**'
    },
    translation: {
      content: '>>> **※Do jakého jazyka přeložit?**',
      selectLang: '>>> **※Překládá se do {0}...**',
      undefined: '>>> **※Jazyk pro překlad není nastaven\nNastavte jej v `/setting`**'
    }
  },
  localizedNames: {
    bg: 'Bulharština',
    cs: 'Čeština',
    da: 'Dánština',
    de: 'Němčina',
    el: 'Řečtina',
    'en-GB': 'Angličtina, UK',
    'en-US': 'Angličtina, USA',
    'es-ES': 'Španělština',
    fi: 'Finština',
    fr: 'Francouzština',
    hi: 'Hindština',
    hr: 'Chorvatština',
    hu: 'Maďarština',
    id: 'Indonéština',
    it: 'Italština',
    ja: 'Japonština',
    ko: 'Korejština',
    lt: 'Litevština',
    nl: 'Nizozemština',
    no: 'Norština',
    pl: 'Polština',
    'pt-BR': 'Portugalština, Brazílie',
    ro: 'Rumunština',
    ru: 'Ruština',
    'sv-SE': 'Švédština',
    th: 'Thajština',
    tr: 'Turečtina',
    uk: 'Ukrajinština',
    vi: 'Vietnamština',
    'zh-CN': 'Čínština',
    'zh-TW': 'Čínština, Tchaj-wan'
  }
})

export default cs