import { ApplicationIntegrationType, ContextMenuCommandBuilder } from 'discord.js'
import { instance } from '~/interfaces/commands/IBaseCommand'
import WrapDataManager from '~/managers/WrapDataManager'
import TranslationCommand from './main'

const contextMenuCommand = new ContextMenuCommandBuilder()
  .setIntegrationTypes(ApplicationIntegrationType.GuildInstall)
  .setName('translation')
  .setNameLocalizations({
    bg: 'Превод',
    cs: 'Překlad',
    da: 'Oversættelse',
    de: 'Übersetzung',
    el: 'Μετάφραση',
    'en-GB': 'Translation',
    'en-US': 'Translation',
    'es-ES': 'Traducción',
    fi: 'Käännös',
    fr: 'Traduction',
    hi: 'अनुवाद',
    hr: 'Prevedi',
    hu: 'fordít',
    id: 'menerjemahkan',
    it: 'tradurre',
    ja: '翻訳する',
    ko: '번역하다',
    lt: 'išversti',
    nl: 'vertalen',
    no: 'oversette',
    pl: 'Tłumaczyć',
    'pt-BR': 'traduzir',
    ro: 'Traduceți',
    ru: 'переводить',
    'sv-SE': 'Översätt',
    th: 'แปลภาษา',
    tr: 'Çevirmek',
    uk: 'перекладати',
    vi: 'dịch',
    'zh-CN': '翻譯',
    'zh-TW': '翻译'
  })

const translation = WrapDataManager.toContextPack({
  data: contextMenuCommand,
  instance: instance(TranslationCommand)
})

export default translation
