import { Locale, SlashCommandBuilder } from 'discord.js'
import { instance } from '~/interfaces/commands/IBaseCommand'
import WrapDataManager from '~/managers/WrapDataManager'
import { getI18n } from '~/utils/discord'
import HelpCommand from './main'

const slashCommand = new SlashCommandBuilder()
  .setName('help')
  .setDescription(getI18n().commands.help.description)
  .setDescriptionLocalizations({
    bg: getI18n(Locale.Bulgarian).commands.help.description,
    cs: getI18n(Locale.Czech).commands.help.description,
    da: getI18n(Locale.Danish).commands.help.description,
    de: getI18n(Locale.German).commands.help.description,
    el: getI18n(Locale.Greek).commands.help.description,
    'en-GB': getI18n(Locale.EnglishGB).commands.help.description,
    'en-US': getI18n(Locale.EnglishUS).commands.help.description,
    'es-ES': getI18n(Locale.SpanishES).commands.help.description,
    fi: getI18n(Locale.Finnish).commands.help.description,
    fr: getI18n(Locale.French).commands.help.description,
    hi: getI18n(Locale.Hindi).commands.help.description,
    hr: getI18n(Locale.Croatian).commands.help.description,
    hu: getI18n(Locale.Hungarian).commands.help.description,
    id: getI18n(Locale.Indonesian).commands.help.description,
    it: getI18n(Locale.Italian).commands.help.description,
    ja: getI18n(Locale.Japanese).commands.help.description,
    ko: getI18n(Locale.Korean).commands.help.description,
    lt: getI18n(Locale.Lithuanian).commands.help.description,
    nl: getI18n(Locale.Dutch).commands.help.description,
    no: getI18n(Locale.Norwegian).commands.help.description,
    pl: getI18n(Locale.Polish).commands.help.description,
    'pt-BR': getI18n(Locale.PortugueseBR).commands.help.description,
    ro: getI18n(Locale.Romanian).commands.help.description,
    ru: getI18n(Locale.Russian).commands.help.description,
    'sv-SE': getI18n(Locale.Swedish).commands.help.description,
    th: getI18n(Locale.Thai).commands.help.description,
    tr: getI18n(Locale.Turkish).commands.help.description,
    uk: getI18n(Locale.Ukrainian).commands.help.description,
    vi: getI18n(Locale.Vietnamese).commands.help.description,
    'zh-CN': getI18n(Locale.ChineseCN).commands.help.description,
    'zh-TW': getI18n(Locale.ChineseTW).commands.help.description
  })

const help = WrapDataManager.toCommandPack({
  data: slashCommand,
  instance: instance(HelpCommand)
})

export default help
