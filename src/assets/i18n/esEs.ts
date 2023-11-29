import WrapDataManager from '~/managers/WrapDataManager'

const esEs = WrapDataManager.toI18n({
  commands: {
    language: {
      description: 'Configurar idioma de traducción',
      embed: {
        footer: {
          text: 'Número máximo de configuraciones de idioma: {0} / {1}'
        },
        title: 'Pantalla de configuración del idioma de traducción:'
      },
      maxDataLength: '>>> **※Puede configurar hasta {0} idiomas como máximo**'
    },
    translation: {
      content: '>>> **※¿A qué idioma traducir?**',
      selectLang: '>>> **※Traduciendo al {0}...**',
      undefined: '>>> **※El idioma de traducción no está configurado\nConfigúrelo en `/setting`**'
    }
  },
  localizedNames: {
    bg: 'Búlgaro',
    cs: 'Checo',
    da: 'Danés',
    de: 'Alemán',
    el: 'Griego',
    'en-GB': 'Inglés, Reino Unido',
    'en-US': 'Inglés, EE.UU.',
    'es-ES': 'Español',
    fi: 'Finlandés',
    fr: 'Francés',
    hi: 'Hindi',
    hr: 'Croata',
    hu: 'Húngaro',
    id: 'Indonesio',
    it: 'Italiano',
    ja: 'Japonés',
    ko: 'Coreano',
    lt: 'Lituano',
    nl: 'Holandés',
    no: 'Noruego',
    pl: 'Polaco',
    'pt-BR': 'Portugués, Brasil',
    ro: 'Rumano',
    ru: 'Ruso',
    'sv-SE': 'Sueco',
    th: 'Tailandés',
    tr: 'Turco',
    uk: 'Ucraniano',
    vi: 'Vietnamita',
    'zh-CN': 'Chino',
    'zh-TW': 'Chino, Taiwán'
  }
})

export default esEs