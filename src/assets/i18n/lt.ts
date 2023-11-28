import WrapDataManager from '~/managers/WrapDataManager'

const lt = WrapDataManager.toI18n({
  commands: {
    language: {
      description: 'Nustatykite vertimo kalbą',
      embed: {
        footer: {
          text: 'Maksimalus kalbų nustatymų skaičius: {0} / {1}'
        },
        title: 'Vertimo kalbos nustatymo ekranas:'
      },
      maxDataLength: '>>> **※Galite nustatyti iki {0} kalbų**'
    },
    translation: {
      content: '>>> **※Į kurią kalbą versti?**',
      selectLang: '>>> **※Verčiama į {0}...**',
      undefined: '>>> **※Vertimo kalba nėra nustatyta\nNustatykite ją `/setting`**'
    }
  },
  localizedNames: {
    bg: 'Bulgarų',
    cs: 'Čekų',
    da: 'Danų',
    de: 'Vokiečių',
    el: 'Graikų',
    'en-GB': 'Anglų, JK',
    'en-US': 'Anglų, JAV',
    'es-ES': 'Ispanų',
    fi: 'Suomių',
    fr: 'Prancūzų',
    hi: 'Hindi',
    hr: 'Kroatų',
    hu: 'Vengrų',
    id: 'Indoneziečių',
    it: 'Italų',
    ja: 'Japonų',
    ko: 'Korėjiečių',
    lt: 'Lietuvių',
    nl: 'Olandų',
    no: 'Norvegų',
    pl: 'Lenkų',
    'pt-BR': 'Portugalų, Brazilija',
    ro: 'Rumunų',
    ru: 'Rusų',
    'sv-SE': 'Švedų',
    th: 'Tajų',
    tr: 'Turkų',
    uk: 'Ukrainiečių',
    vi: 'Vietnamiečių',
    'zh-CN': 'Kinų',
    'zh-TW': 'Kinų, Taivano'
  }
})

export default lt