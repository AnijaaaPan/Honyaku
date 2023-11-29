import WrapDataManager from '~/managers/WrapDataManager'

const vi = WrapDataManager.toI18n({
  commands: {
    language: {
      description: 'Thiết lập ngôn ngữ dịch',
      embed: {
        footer: {
          text: 'Số lượng cài đặt ngôn ngữ tối đa: {0} / {1}'
        },
        title: 'Màn hình cài đặt ngôn ngữ dịch:'
      },
      maxDataLength: '>>> **※Chỉ có thể thiết lập tối đa {0} ngôn ngữ**'
    },
    translation: {
      content: '>>> **※Dịch sang ngôn ngữ nào?**',
      selectLang: '>>> **※Đang dịch sang {0}...**',
      undefined: '>>> **※Ngôn ngữ dịch chưa được thiết lập\nHãy thiết lập nó trong `/setting`**'
    }
  },
  localizedNames: {
    bg: 'Tiếng Bulgaria',
    cs: 'Tiếng Séc',
    da: 'Tiếng Đan Mạch',
    de: 'Tiếng Đức',
    el: 'Tiếng Hy Lạp',
    'en-GB': 'Tiếng Anh, Anh',
    'en-US': 'Tiếng Anh, Mỹ',
    'es-ES': 'Tiếng Tây Ban Nha',
    fi: 'Tiếng Phần Lan',
    fr: 'Tiếng Pháp',
    hi: 'Tiếng Hindi',
    hr: 'Tiếng Croatia',
    hu: 'Tiếng Hungary',
    id: 'Tiếng Indonesia',
    it: 'Tiếng Ý',
    ja: 'Tiếng Nhật',
    ko: 'Tiếng Hàn',
    lt: 'Tiếng Litva',
    nl: 'Tiếng Hà Lan',
    no: 'Tiếng Na Uy',
    pl: 'Tiếng Ba Lan',
    'pt-BR': 'Tiếng Bồ Đào Nha, Brazil',
    ro: 'Tiếng Rumani',
    ru: 'Tiếng Nga',
    'sv-SE': 'Tiếng Thụy Điển',
    th: 'Tiếng Thái',
    tr: 'Tiếng Thổ Nhĩ Kỳ',
    uk: 'Tiếng Ukraine',
    vi: 'Tiếng Việt',
    'zh-CN': 'Tiếng Trung',
    'zh-TW': 'Tiếng Trung, Đài Loan'
  }
})

export default vi