import WrapDataManager from '~/managers/WrapDataManager'

const pt = WrapDataManager.toI18n({
  commands: {
    help: {
      description: 'Como usar o BOT',
      embeds: [{
        contents: ['Idioma atualmente selecionado', 'Mover para cima', 'Mover para baixo', 'Ativar idioma', 'Desativar idioma'],
        description: '**`/setting` Pode ser configurado através do comando**',
        footer: {
          text: '※Este comando só pode ser usado se você tiver permissões completas'
        },
        title: 'Método de configuração de idioma:'
      }, {
        contents: ['Clique com o botão direito', 'Clique'],
        type: 'PC'
      }, {
        contents: ['Pressionar e segurar', 'Toque'],
        type: 'Smartphone'
      }],
      howToUseEmbed: {
        contents: ['Selecione a mensagem que deseja traduzir {0}', '`Aplicativo` para {0}', '`Traduzir` para {0}', 'Selecione o idioma desejado {0}', 'Tradução concluída'],
        description: 'Passos:',
        title: 'Como usar ({0}):'
      }
    },
    language: {
      description: 'Definir idioma de tradução',
      embed: {
        footer: {
          text: 'Número máximo de configurações de idioma: {0} / {1}'
        },
        title: 'Tela de configuração do idioma de tradução:'
      },
      maxDataLength: '>>> **※Pode configurar no máximo {0} idiomas**'
    },
    translation: {
      content: '>>> **※Para qual idioma traduzir?**',
      selectLang: '>>> **※Traduzindo para {0}...**',
      undefined: '>>> **※O idioma de tradução não está definido\nDefina-o em `/setting`**'
    }
  },
  localizedNames: {
    bg: 'Búlgaro',
    cs: 'Tcheco',
    da: 'Dinamarquês',
    de: 'Alemão',
    el: 'Grego',
    'en-GB': 'Inglês, Reino Unido',
    'en-US': 'Inglês, EUA',
    'es-ES': 'Espanhol',
    fi: 'Finlandês',
    fr: 'Francês',
    hi: 'Hindi',
    hr: 'Croata',
    hu: 'Húngaro',
    id: 'Indonésio',
    it: 'Italiano',
    ja: 'Japonês',
    ko: 'Coreano',
    lt: 'Lituano',
    nl: 'Holandês',
    no: 'Norueguês',
    pl: 'Polonês',
    'pt-BR': 'Português, Brasil',
    ro: 'Romeno',
    ru: 'Russo',
    'sv-SE': 'Sueco',
    th: 'Tailandês',
    tr: 'Turco',
    uk: 'Ucraniano',
    vi: 'Vietnamita',
    'zh-CN': 'Chinês',
    'zh-TW': 'Chinês, Taiwan'
  }
})

export default pt