import WrapDataManager from '~/managers/WrapDataManager'

const it = WrapDataManager.toI18n({
  commands: {
    language: {
      description: 'Imposta la lingua di traduzione',
      embed: {
        footer: {
          text: 'Numero massimo di impostazioni della lingua: {0} / {1}'
        },
        title: 'Schermata di impostazione della lingua di traduzione:'
      },
      maxDataLength: '>>> **※Puoi impostare al massimo {0} lingue**'
    },
    translation: {
      content: '>>> **※In quale lingua tradurre?**',
      selectLang: '>>> **※Traduzione in corso in {0}...**',
      undefined: '>>> **※La lingua di traduzione non è impostata\nImpostala in `/setting`**'
    }
  },
  localizedNames: {
    bg: 'Bulgaro',
    cs: 'Ceco',
    da: 'Danese',
    de: 'Tedesco',
    el: 'Greco',
    'en-GB': 'Inglese, Regno Unito',
    'en-US': 'Inglese, Stati Uniti',
    'es-ES': 'Spagnolo',
    fi: 'Finlandese',
    fr: 'Francese',
    hi: 'Hindi',
    hr: 'Croato',
    hu: 'Ungherese',
    id: 'Indonesiano',
    it: 'Italiano',
    ja: 'Giapponese',
    ko: 'Coreano',
    lt: 'Lituano',
    nl: 'Olandese',
    no: 'Norvegese',
    pl: 'Polacco',
    'pt-BR': 'Portoghese, Brasile',
    ro: 'Rumeno',
    ru: 'Russo',
    'sv-SE': 'Svedese',
    th: 'Thai',
    tr: 'Turco',
    uk: 'Ucraino',
    vi: 'Vietnamita',
    'zh-CN': 'Cinese',
    'zh-TW': 'Cinese, Taiwan'
  }
})

export default it