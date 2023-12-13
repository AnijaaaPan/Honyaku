import WrapDataManager from '~/managers/WrapDataManager'

const zhTw = WrapDataManager.toI18n({
  commands: {
    help: {
      description: '如何使用BOT',
      embeds: [{
        contents: ['目前選擇的語言', '向上移動', '向下移動', '啟動語言', '停用語言'],
        description: '**`/setting` 可透過命令設定**',
        footer: {
          text: '※此命令僅在您擁有全部權限時可用'
        },
        title: '語言設定方法:'
      }, {
        contents: ['右鍵點擊', '點擊'],
        type: '電腦'
      }, {
        contents: ['長按', '輕觸'],
        type: '智慧型手機'
      }],
      howToUseEmbed: {
        contents: ['選擇您要翻譯的訊息 {0}', '`應用程式`用於 {0}', '`翻譯`用於 {0}', '選擇您想要的語言 {0}', '翻譯完成'],
        description: '步驟:',
        title: '使用方法 ({0}):'
      }
    },
    language: {
      description: '設定翻譯語言',
      embed: {
        footer: {
          text: '最大語言設置數量: {0} / {1}'
        },
        title: '翻譯語言設置畫面:'
      },
      maxDataLength: '>>> **※最多只能設置 {0} 種語言**'
    },
    translation: {
      content: '>>> **※要翻譯成哪種語言？**',
      selectLang: '>>> **※正在翻譯成 {0}...**',
      undefined: '>>> **※未設置翻譯語言\n請在 `/setting` 中設置**'
    }
  },
  localizedNames: {
    bg: '保加利亞語',
    cs: '捷克語',
    da: '丹麥語',
    de: '德語',
    el: '希臘語',
    'en-GB': '英語（英國）',
    'en-US': '英語（美國）',
    'es-ES': '西班牙語',
    fi: '芬蘭語',
    fr: '法語',
    hi: '印地語',
    hr: '克羅地亞語',
    hu: '匈牙利語',
    id: '印尼語',
    it: '意大利語',
    ja: '日語',
    ko: '韓語',
    lt: '立陶宛語',
    nl: '荷蘭語',
    no: '挪威語',
    pl: '波蘭語',
    'pt-BR': '葡萄牙語（巴西）',
    ro: '羅馬尼亞語',
    ru: '俄語',
    'sv-SE': '瑞典語',
    th: '泰語',
    tr: '土耳其語',
    uk: '烏克蘭語',
    vi: '越南語',
    'zh-CN': '中文（簡體）',
    'zh-TW': '中文（繁體）'
  }
})

export default zhTw