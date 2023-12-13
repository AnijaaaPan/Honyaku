import WrapDataManager from '~/managers/WrapDataManager'

const fi = WrapDataManager.toI18n({
  commands: {
    help: {
      description: 'BOTin käyttöohjeet',
      embeds: [{
        contents: ['Tällä hetkellä valittu kieli', 'Siirrä ylös', 'Siirrä alas', 'Aktivoi kieli', 'Poista kielen käytöstä'],
        description: '**</setting:{0}> Asetukset voidaan tehdä komennon avulla**',
        footer: {
          text: '※Tämä komento on käytettävissä vain, jos sinulla on täydet oikeudet'
        },
        title: 'Kielen asetusmenetelmä:'
      }, {
        contents: ['Oikea klikkaus', 'Klikkaus'],
        type: 'PC'
      }, {
        contents: ['Pitkä painallus', 'Napautus'],
        type: 'Puhelin'
      }],
      howToUseEmbed: {
        contents: ['Valitse käännettävä viesti {0}', '`Sovellus` {0}', '`Käännä` {0}', 'Valitse haluamasi kieli {0}', 'Käännös valmis'],
        description: 'Vaiheet:',
        title: 'Käyttöohjeet ({0}):'
      }
    },
    language: {
      description: 'Aseta käännöskieli',
      embed: {
        footer: {
          text: 'Maksimikieliasetusten määrä: {0} / {1}'
        },
        title: 'Käännöskielen asetusnäyttö:'
      },
      maxDataLength: '>>> **※Voi asettaa korkeintaan {0} kieltä**'
    },
    translation: {
      content: '>>> **※Mille kielelle kääntää?**',
      selectLang: '>>> **※Kääntää kielelle {0}...**',
      undefined: '>>> **※Käännöskieltä ei ole asetettu\nAseta se `/setting`-kohdassa**'
    }
  },
  localizedNames: {
    bg: 'Bulgaria',
    cs: 'Tšekki',
    da: 'Tanska',
    de: 'Saksa',
    el: 'Kreikka',
    'en-GB': 'Englanti, UK',
    'en-US': 'Englanti, USA',
    'es-ES': 'Espanja',
    fi: 'Suomi',
    fr: 'Ranska',
    hi: 'Hindi',
    hr: 'Kroatia',
    hu: 'Unkari',
    id: 'Indonesia',
    it: 'Italia',
    ja: 'Japani',
    ko: 'Korea',
    lt: 'Liettua',
    nl: 'Hollanti',
    no: 'Norja',
    pl: 'Puola',
    'pt-BR': 'Portugali, Brasilia',
    ro: 'Romania',
    ru: 'Venäjä',
    'sv-SE': 'Ruotsi',
    th: 'Thai',
    tr: 'Turkki',
    uk: 'Ukraina',
    vi: 'Vietnam',
    'zh-CN': 'Kiina',
    'zh-TW': 'Kiina, Taiwan'
  }
})

export default fi