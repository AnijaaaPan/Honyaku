import WrapDataManager from '~/managers/WrapDataManager'

const pt = WrapDataManager.toI18n({
  commands: {
    language: {
      description: 'Definir idioma de tradução',
      embed: {
        footer: {
          text: 'Número máximo de configurações de idioma: {0} / {1}'
        },
        title: 'Tela de configuração do idioma de tradução:'
      },
      maxDataLength: '>>> **※Pode configurar no máximo {0} idiomas**'
    },
    translation: {
      content: '>>> **※Para qual idioma traduzir?**',
      selectLang: '>>> **※Traduzindo para {0}...**',
      undefined: '>>> **※O idioma de tradução não está definido\nDefina-o em `/setting`**'
    }
  },
  localizedNames: {
    bg: 'Búlgaro',
    cs: 'Tcheco',
    da: 'Dinamarquês',
    de: 'Alemão',
    el: 'Grego',
    'en-GB': 'Inglês, Reino Unido',
    'en-US': 'Inglês, EUA',
    'es-ES': 'Espanhol',
    fi: 'Finlandês',
    fr: 'Francês',
    hi: 'Hindi',
    hr: 'Croata',
    hu: 'Húngaro',
    id: 'Indonésio',
    it: 'Italiano',
    ja: 'Japonês',
    ko: 'Coreano',
    lt: 'Lituano',
    nl: 'Holandês',
    no: 'Norueguês',
    pl: 'Polonês',
    'pt-BR': 'Português, Brasil',
    ro: 'Romeno',
    ru: 'Russo',
    'sv-SE': 'Sueco',
    th: 'Tailandês',
    tr: 'Turco',
    uk: 'Ucraniano',
    vi: 'Vietnamita',
    'zh-CN': 'Chinês',
    'zh-TW': 'Chinês, Taiwan'
  }
})

export default pt