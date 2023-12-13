import WrapDataManager from '~/managers/WrapDataManager'

const it = WrapDataManager.toI18n({
  commands: {
    help: {
      description: 'Come utilizzare il BOT',
      embeds: [{
        contents: ['Lingua attualmente selezionata', 'Sposta su', 'Sposta giù', 'Attiva lingua', 'Disattiva lingua'],
        description: '**</setting:{0}> Può essere impostato tramite il comando**',
        footer: {
          text: '※Questo comando può essere utilizzato solo se si hanno pieni diritti'
        },
        title: 'Metodo di impostazione della lingua:'
      }, {
        contents: ['Clic destro', 'Clic'],
        type: 'PC'
      }, {
        contents: ['Premere a lungo', 'Toccare'],
        type: 'Smartphone'
      }],
      howToUseEmbed: {
        contents: ['Seleziona il messaggio che vuoi tradurre {0}', '`App` per {0}', '`Traduci` per {0}', 'Seleziona la lingua desiderata {0}', 'Traduzione completata'],
        description: 'Passaggi:',
        title: 'Come Utilizzare ({0}):'
      }
    },
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