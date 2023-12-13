import WrapDataManager from '~/managers/WrapDataManager'

const fr = WrapDataManager.toI18n({
  commands: {
    help: {
      description: 'Comment utiliser le BOT',
      embeds: [{
        contents: ['Langue actuellement sélectionnée', 'Monter', 'Descendre', 'Activer la langue', 'Désactiver la langue'],
        description: '**</setting:{0}> Peut être configuré via la commande**',
        footer: {
          text: '※Cette commande ne peut être utilisée que si vous avez tous les droits'
        },
        title: 'Méthode de réglage de la langue:'
      }, {
        contents: ['Clic droit', 'Clic'],
        type: 'PC'
      }, {
        contents: ['Appui long', 'Tapoter'],
        type: 'Smartphone'
      }],
      howToUseEmbed: {
        contents: ['Sélectionnez le message à traduire {0}', '`Application` pour {0}', '`Traduire` pour {0}', 'Sélectionnez la langue souhaitée {0}', 'Traduction terminée'],
        description: 'Étapes:',
        title: 'Mode d’emploi ({0}):'
      }
    },
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