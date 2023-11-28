import WrapDataManager from '~/managers/WrapDataManager'

const fr = WrapDataManager.toI18n({
  commands: {
    language: {
      description: 'Définir la langue de traduction',
      embed: {
        footer: {
          text: 'Nombre maximal de paramètres de langue: {0} / {1}'
        },
        title: 'Écran de configuration de la langue de traduction:'
      },
      maxDataLength: '>>> **※Vous pouvez configurer au maximum {0} langues**'
    },
    translation: {
      content: '>>> **※Dans quelle langue traduire ?**',
      selectLang: '>>> **※Traduction en cours en {0}...**',
      undefined: ">>> **※La langue de traduction n'est pas définie\nVeuillez la définir dans `/setting`**"
    }
  },
  localizedNames: {
    bg: 'Bulgare',
    cs: 'Tchèque',
    da: 'Danois',
    de: 'Allemand',
    el: 'Grec',
    'en-GB': 'Anglais, Royaume-Uni',
    'en-US': 'Anglais, États-Unis',
    'es-ES': 'Espagnol',
    fi: 'Finnois',
    fr: 'Français',
    hi: 'Hindi',
    hr: 'Croate',
    hu: 'Hongrois',
    id: 'Indonésien',
    it: 'Italien',
    ja: 'Japonais',
    ko: 'Coréen',
    lt: 'Lituanien',
    nl: 'Néerlandais',
    no: 'Norvégien',
    pl: 'Polonais',
    'pt-BR': 'Portugais, Brésil',
    ro: 'Roumain',
    ru: 'Russe',
    'sv-SE': 'Suédois',
    th: 'Thaï',
    tr: 'Turc',
    uk: 'Ukrainien',
    vi: 'Vietnamien',
    'zh-CN': 'Chinois',
    'zh-TW': 'Chinois, Taiwan'
  }
})

export default fr