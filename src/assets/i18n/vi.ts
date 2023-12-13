import WrapDataManager from '~/managers/WrapDataManager'

const vi = WrapDataManager.toI18n({
  commands: {
    help: {
      description: 'Cách sử dụng BOT',
      embeds: [{
        contents: ['Ngôn ngữ hiện tại được chọn', 'Di chuyển lên', 'Di chuyển xuống', 'Kích hoạt ngôn ngữ', 'Vô hiệu hóa ngôn ngữ'],
        description: '**</setting:{0}> Có thể được thiết lập thông qua lệnh**',
        footer: {
          text: '※Lệnh này chỉ có thể sử dụng khi bạn có toàn quyền'
        },
        title: 'Phương pháp thiết lập ngôn ngữ:'
      }, {
        contents: ['Nhấp chuột phải', 'Nhấp chuột'],
        type: 'Máy tính'
      }, {
        contents: ['Giữ lâu', 'Chạm'],
        type: 'Điện thoại thông minh'
      }],
      howToUseEmbed: {
        contents: ['Chọn tin nhắn bạn muốn dịch {0}', '`Ứng dụng` cho {0}', '`Dịch` cho {0}', 'Chọn ngôn ngữ bạn muốn {0}', 'Hoàn thành dịch'],
        description: 'Các bước:',
        title: 'Cách sử dụng ({0}):'
      }
    },
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