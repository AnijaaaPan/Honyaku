import WrapDataManager from '~/managers/WrapDataManager'

const hu = WrapDataManager.toI18n({
  commands: {
    language: {
      description: 'Fordítási nyelv beállítása',
      embed: {
        footer: {
          text: 'Maximális nyelvbeállítások száma: {0} / {1}'
        },
        title: 'Fordítási nyelv beállító képernyő:'
      },
      maxDataLength: '>>> **※Legfeljebb {0} nyelvet állíthat be**'
    },
    translation: {
      content: '>>> **※Milyen nyelvre fordítson?**',
      selectLang: '>>> **※Fordítás {0} nyelvre...**',
      undefined: '>>> **※A fordítási nyelv nincs beállítva\nKérjük, állítsa be a `/setting`-ben**'
    }
  },
  localizedNames: {
    bg: 'Bolgár',
    cs: 'Cseh',
    da: 'Dán',
    de: 'Német',
    el: 'Görög',
    'en-GB': 'Angol, Egyesült Királyság',
    'en-US': 'Angol, USA',
    'es-ES': 'Spanyol',
    fi: 'Finn',
    fr: 'Francia',
    hi: 'Hindi',
    hr: 'Horvát',
    hu: 'Magyar',
    id: 'Indonéz',
    it: 'Olasz',
    ja: 'Japán',
    ko: 'Koreai',
    lt: 'Litván',
    nl: 'Holland',
    no: 'Norvég',
    pl: 'Lengyel',
    'pt-BR': 'Portugál, Brazília',
    ro: 'Román',
    ru: 'Orosz',
    'sv-SE': 'Svéd',
    th: 'Thai',
    tr: 'Török',
    uk: 'Ukrán',
    vi: 'Vietnámi',
    'zh-CN': 'Kínai',
    'zh-TW': 'Kínai, Tajvan'
  }
})

export default hu