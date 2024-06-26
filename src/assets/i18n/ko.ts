import WrapDataManager from '~/managers/WrapDataManager'

const ko = WrapDataManager.toI18n({
  commands: {
    help: {
      description: 'BOT 사용 방법',
      embeds: [{
        contents: ['현재 선택된 언어', '위로 이동', '아래로 이동', '언어 활성화', '언어 비활성화'],
        description: '**`/setting` 명령을 통해 설정할 수 있습니다**',
        footer: {
          text: '※이 명령은 모든 권한이 있는 경우에만 사용할 수 있습니다'
        },
        title: '언어 설정 방법:'
      }, {
        contents: ['오른쪽 클릭', '클릭'],
        type: 'PC'
      }, {
        contents: ['길게 누르기', '탭하기'],
        type: '스마트폰'
      }],
      howToUseEmbed: {
        contents: ['번역하고 싶은 메시지를 선택하세요 {0}', '`앱`을 {0}', '`번역하기`를 {0}', '원하는 언어를 선택하세요 {0}', '번역 완료'],
        description: '단계:',
        title: '사용 방법 ({0}):'
      }
    },
    language: {
      description: '번역할 언어 설정',
      embed: {
        footer: {
          text: '최대 언어 설정 수: {0} / {1}'
        },
        title: '번역 언어 설정 화면:'
      },
      maxDataLength: '>>> **※최대 {0}개 언어까지 설정 가능**'
    },
    translation: {
      content: '>>> **※어떤 언어로 번역하시겠습니까?**',
      selectLang: '>>> **※{0}(으)로 번역 중...**',
      undefined: '>>> **※번역할 언어가 설정되지 않았습니다\n`/setting`에서 설정해 주세요**'
    }
  },
  localizedNames: {
    bg: '불가리아어',
    cs: '체코어',
    da: '덴마크어',
    de: '독일어',
    el: '그리스어',
    'en-GB': '영어, 영국',
    'en-US': '영어, 미국',
    'es-ES': '스페인어',
    fi: '핀란드어',
    fr: '프랑스어',
    hi: '힌디어',
    hr: '크로아티아어',
    hu: '헝가리어',
    id: '인도네시아어',
    it: '이탈리아어',
    ja: '일본어',
    ko: '한국어',
    lt: '리투아니아어',
    nl: '네덜란드어',
    no: '노르웨이어',
    pl: '폴란드어',
    'pt-BR': '포르투갈어, 브라질',
    ro: '루마니아어',
    ru: '러시아어',
    'sv-SE': '스웨덴어',
    th: '태국어',
    tr: '터키어',
    uk: '우크라이나어',
    vi: '베트남어',
    'zh-CN': '중국어',
    'zh-TW': '중국어, 타이완'
  }
})

export default ko