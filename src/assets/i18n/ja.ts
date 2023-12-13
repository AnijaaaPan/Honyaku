import WrapDataManager from '~/managers/WrapDataManager'

const ja = WrapDataManager.toI18n({
  commands: {
    help: {
      description: 'BOTの利用方法',
      embeds: [{
        contents: ['現在選択中の言語', '１つ上に移動する', '１つ下に移動する', '言語を有効にする', '言語を無効にする'],
        description: '**`/setting` コマンドから設定出来ます**',
        footer: {
          text: '※このコマンドは全権限を持っている場合のみ使用できます'
        },
        title: '言語設定方法:'
      }, {
        contents: ['右クリック', 'クリック'],
        type: 'PC'
      }, {
        contents: ['長押し', 'タップ'],
        type: 'スマホ'
      }],
      howToUseEmbed: {
        contents: ['翻訳したいメッセージを{0}', '`アプリ`を{0}', '`翻訳する`を{0}', '翻訳したい言語を{0}', '翻訳完了'],
        description: '手順:',
        title: '利用方法 ({0}):'
      }
    },
    language: {
      description: '翻訳する言語を設定します',
      embed: {
        footer: {
          text: '最大言語設定数: {0} / {1}'
        },
        title: '翻訳言語設定画面:'
      },
      maxDataLength: '>>> **※最大{0}つまでの言語しか設定できません**'
    },
    translation: {
      content: '>>> **※どの言語で翻訳しますか？**',
      selectLang: '>>> **※{0}に翻訳中...**',
      undefined: '>>> **※翻訳する言語が設定されていません\n`/setting`で設定して下さい**'
    }
  },
  localizedNames: {
    bg: 'ブルガリア語',
    cs: 'チェコ語',
    da: 'デンマーク語',
    de: 'ドイツ語',
    el: 'ギリシャ語',
    'en-GB': '英語、イギリス',
    'en-US': '英語、アメリカ',
    'es-ES': 'スペイン語',
    fi: 'フィンランド語',
    fr: 'フランス語',
    hi: 'ヒンディー語',
    hr: 'クロアチア語',
    hu: 'ハンガリー語',
    id: 'インドネシア語',
    it: 'イタリア語',
    ja: '日本語',
    ko: '韓国語',
    lt: 'リトアニア語',
    nl: 'オランダ語',
    no: 'ノルウェー語',
    pl: 'ポーランド語',
    'pt-BR': 'ポルトガル語、ブラジル',
    ro: 'ルーマニア語',
    ru: 'ロシア語',
    'sv-SE': 'スウェーデン語',
    th: 'タイ語',
    tr: 'トルコ語',
    uk: 'ウクライナ語',
    vi: 'ベトナム語',
    'zh-CN': '中国語',
    'zh-TW': '台湾、中国語'
  }
})

export default ja