import WrapDataManager from '~/managers/WrapDataManager'

const enUs = WrapDataManager.toI18n({
  commands: {
    help: {
      description: 'How to Use the BOT',
      embeds: [{
        contents: ['Currently selected language', 'Move up', 'Move down', 'Enable language', 'Disable language'],
        description: '**`/setting` Can be configured via the command**',
        footer: {
          text: '※This command can only be used if you have full permissions'
        },
        title: 'Language Setting Method:'
      }, {
        contents: ['Right-click', 'Click'],
        type: 'PC'
      }, {
        contents: ['Long press', 'Tap'],
        type: 'Smartphone'
      }],
      howToUseEmbed: {
        contents: ['Select the message you want to translate {0}', '`App` to {0}', '`Translate` to {0}', 'Select the language you want to translate to {0}', 'Translation completed'],
        description: 'Steps:',
        title: 'How to Use ({0}):'
      }
    },
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