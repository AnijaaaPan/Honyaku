import WrapDataManager from '~/managers/WrapDataManager'

const enUs = WrapDataManager.toI18n({
  commands: {
    language: {
      description: 'Set the language for translation',
      embed: {
        footer: {
          text: 'Maximum number of language settings: {0} / {1}'
        },
        title: 'Translation Language Setting Screen:'
      },
      maxDataLength: '>>> **※Can only set up to {0} languages**'
    },
    translation: {
      content: '>>> **※Which language to translate to?**',
      selectLang: '>>> **※Translating to {0}...**',
      undefined: '>>> **※Translation language not set\nPlease set it in `/setting`**'
    }
  },
  localizedNames: {
    bg: 'Bulgarian',
    cs: 'Czech',
    da: 'Danish',
    de: 'German',
    el: 'Greek',
    'en-GB': 'English, UK',
    'en-US': 'English, US',
    'es-ES': 'Spanish',
    fi: 'Finnish',
    fr: 'French',
    hi: 'Hindi',
    hr: 'Croatian',
    hu: 'Hungarian',
    id: 'Indonesian',
    it: 'Italian',
    ja: 'Japanese',
    ko: 'Korean',
    lt: 'Lithuanian',
    nl: 'Dutch',
    no: 'Norwegian',
    pl: 'Polish',
    'pt-BR': 'Portuguese, Brazil',
    ro: 'Romanian',
    ru: 'Russian',
    'sv-SE': 'Swedish',
    th: 'Thai',
    tr: 'Turkish',
    uk: 'Ukrainian',
    vi: 'Vietnamese',
    'zh-CN': 'Chinese',
    'zh-TW': 'Chinese, Taiwan'
  }
})

export default enUs