import WrapDataManager from '~/managers/WrapDataManager'

const id = WrapDataManager.toI18n({
  commands: {
    help: {
      description: 'Cara Menggunakan BOT',
      embeds: [{
        contents: ['Bahasa yang saat ini dipilih', 'Pindah ke atas', 'Pindah ke bawah', 'Aktifkan bahasa', 'Nonaktifkan bahasa'],
        description: '**`/setting` Dapat diatur melalui perintah**',
        footer: {
          text: '※Perintah ini hanya dapat digunakan jika Anda memiliki semua izin'
        },
        title: 'Metode Pengaturan Bahasa:'
      }, {
        contents: ['Klik kanan', 'Klik'],
        type: 'PC'
      }, {
        contents: ['Tekan lama', 'Ketuk'],
        type: 'Smartphone'
      }],
      howToUseEmbed: {
        contents: ['Pilih pesan yang ingin Anda terjemahkan {0}', '`Aplikasi` untuk {0}', '`Terjemahkan` untuk {0}', 'Pilih bahasa yang diinginkan {0}', 'Terjemahan selesai'],
        description: 'Langkah-langkah:',
        title: 'Cara Menggunakan ({0}):'
      }
    },
    language: {
      description: 'Atur bahasa terjemahan',
      embed: {
        footer: {
          text: 'Jumlah maksimum pengaturan bahasa: {0} / {1}'
        },
        title: 'Layar pengaturan bahasa terjemahan:'
      },
      maxDataLength: '>>> **※Hanya dapat mengatur hingga {0} bahasa**'
    },
    translation: {
      content: '>>> **※Bahasa apa yang akan diterjemahkan?**',
      selectLang: '>>> **※Sedang menerjemahkan ke {0}...**',
      undefined: '>>> **※Bahasa terjemahan belum diatur\nSilakan atur di `/setting`**'
    }
  },
  localizedNames: {
    bg: 'Bahasa Bulgaria',
    cs: 'Bahasa Ceko',
    da: 'Bahasa Denmark',
    de: 'Bahasa Jerman',
    el: 'Bahasa Yunani',
    'en-GB': 'Bahasa Inggris, Inggris',
    'en-US': 'Bahasa Inggris, Amerika',
    'es-ES': 'Bahasa Spanyol',
    fi: 'Bahasa Finlandia',
    fr: 'Bahasa Perancis',
    hi: 'Bahasa Hindi',
    hr: 'Bahasa Kroasia',
    hu: 'Bahasa Hongaria',
    id: 'Bahasa Indonesia',
    it: 'Bahasa Italia',
    ja: 'Bahasa Jepang',
    ko: 'Bahasa Korea',
    lt: 'Bahasa Lituania',
    nl: 'Bahasa Belanda',
    no: 'Bahasa Norwegia',
    pl: 'Bahasa Polandia',
    'pt-BR': 'Bahasa Portugis, Brasil',
    ro: 'Bahasa Rumania',
    ru: 'Bahasa Rusia',
    'sv-SE': 'Bahasa Swedia',
    th: 'Bahasa Thailand',
    tr: 'Bahasa Turki',
    uk: 'Bahasa Ukraina',
    vi: 'Bahasa Vietnam',
    'zh-CN': 'Bahasa Cina',
    'zh-TW': 'Bahasa Cina, Taiwan'
  }
})

export default id