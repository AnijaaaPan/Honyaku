export interface I18n {
  commands: {
    help: {
      description: string
      howToUseEmbed: {
        contents: string[]
        description: string
        title: string
      }
      embeds: [
        {
          contents: string[]
          description: string
          footer: {
            text: string
          }
          title: string
        },
        {
          contents: string[]
          type: string
        },
        {
          contents: string[]
          type: string
        }
      ]
    }
    language: {
      description: string
      embed: {
        footer: {
          text: string
        }
        title: string
      }
      maxDataLength: string
    }
    translation: {
      content: string
      selectLang: string
      undefined: string
    }
  }

  localizedNames: {
    bg: string
    cs: string
    da: string
    de: string
    el: string
    'en-GB': string
    'en-US': string
    'es-ES': string
    fi: string
    fr: string
    hi: string
    hr: string
    hu: string
    id: string
    it: string
    ja: string
    ko: string
    lt: string
    nl: string
    no: string
    pl: string
    'pt-BR': string
    ro: string
    ru: string
    'sv-SE': string
    th: string
    tr: string
    uk: string
    vi: string
    'zh-CN': string
    'zh-TW': string
  }
}