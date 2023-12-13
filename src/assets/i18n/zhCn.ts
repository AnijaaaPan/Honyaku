import WrapDataManager from '~/managers/WrapDataManager'

const zhCn = WrapDataManager.toI18n({
  commands: {
    help: {
      description: '如何使用BOT',
      embeds: [{
        contents: ['当前选择的语言', '向上移动', '向下移动', '激活语言', '停用语言'],
        description: '**</setting:{0}> 可通过命令设置**',
        footer: {
          text: '※此命令仅在您拥有全部权限时可用'
        },
        title: '语言设置方法:'
      }, {
        contents: ['右键点击', '点击'],
        type: '电脑'
      }, {
        contents: ['长按', '轻触'],
        type: '智能手机'
      }],
      howToUseEmbed: {
        contents: ['选择您要翻译的消息 {0}', '`应用程序`用于 {0}', '`翻译`用于 {0}', '选择您想要的语言 {0}', '翻译完成'],
        description: '步骤:',
        title: '使用方法 ({0}):'
      }
    },
    language: {
      description: '设置翻译语言',
      embed: {
        footer: {
          text: '最大语言设置数量: {0} / {1}'
        },
        title: '翻译语言设置界面:'
      },
      maxDataLength: '>>> **※最多只能设置 {0} 种语言**'
    },
    translation: {
      content: '>>> **※要翻译成哪种语言？**',
      selectLang: '>>> **※正在翻译成 {0}...**',
      undefined: '>>> **※未设置翻译语言\n请在 `/setting` 中设置**'
    }
  },
  localizedNames: {
    bg: '保加利亚语',
    cs: '捷克语',
    da: '丹麦语',
    de: '德语',
    el: '希腊语',
    'en-GB': '英语（英国）',
    'en-US': '英语（美国）',
    'es-ES': '西班牙语',
    fi: '芬兰语',
    fr: '法语',
    hi: '印地语',
    hr: '克罗地亚语',
    hu: '匈牙利语',
    id: '印尼语',
    it: '意大利语',
    ja: '日语',
    ko: '韩语',
    lt: '立陶宛语',
    nl: '荷兰语',
    no: '挪威语',
    pl: '波兰语',
    'pt-BR': '葡萄牙语（巴西）',
    ro: '罗马尼亚语',
    ru: '俄语',
    'sv-SE': '瑞典语',
    th: '泰语',
    tr: '土耳其语',
    uk: '乌克兰语',
    vi: '越南语',
    'zh-CN': '中文',
    'zh-TW': '中文（台湾）'
  }
})

export default zhCn