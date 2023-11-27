import { Locale, PermissionsBitField, SlashCommandBuilder } from 'discord.js'
import { instance } from '~/interfaces/commands/IBaseCommand'
import WrapDataManager from '~/managers/WrapDataManager'
import { getI18n } from '~/utils/discord'
import SettingCommand from './main'

const slashCommand = new SlashCommandBuilder()
slashCommand.setDefaultMemberPermissions(PermissionsBitField.Flags.Administrator)
slashCommand.setDescription(getI18n().commands.language.description)
slashCommand.setDescriptionLocalizations({
  bg: getI18n(Locale.Bulgarian).commands.language.description,
  cs: getI18n(Locale.Czech).commands.language.description,
  da: getI18n(Locale.Danish).commands.language.description,
  de: getI18n(Locale.German).commands.language.description,
  el: getI18n(Locale.Greek).commands.language.description,
  'en-GB': getI18n(Locale.EnglishGB).commands.language.description,
  'en-US': getI18n(Locale.EnglishUS).commands.language.description,
  'es-ES': getI18n(Locale.SpanishES).commands.language.description,
  fi: getI18n(Locale.Finnish).commands.language.description,
  fr: getI18n(Locale.French).commands.language.description,
  hi: getI18n(Locale.Hindi).commands.language.description,
  hr: getI18n(Locale.Croatian).commands.language.description,
  hu: getI18n(Locale.Hungarian).commands.language.description,
  id: getI18n(Locale.Indonesian).commands.language.description,
  it: getI18n(Locale.Italian).commands.language.description,
  ja: getI18n(Locale.Japanese).commands.language.description,
  ko: getI18n(Locale.Korean).commands.language.description,
  lt: getI18n(Locale.Lithuanian).commands.language.description,
  nl: getI18n(Locale.Dutch).commands.language.description,
  no: getI18n(Locale.Norwegian).commands.language.description,
  pl: getI18n(Locale.Polish).commands.language.description,
  'pt-BR': getI18n(Locale.PortugueseBR).commands.language.description,
  ro: getI18n(Locale.Romanian).commands.language.description,
  ru: getI18n(Locale.Russian).commands.language.description,
  'sv-SE': getI18n(Locale.Swedish).commands.language.description,
  th: getI18n(Locale.Thai).commands.language.description,
  tr: getI18n(Locale.Turkish).commands.language.description,
  uk: getI18n(Locale.Ukrainian).commands.language.description,
  vi: getI18n(Locale.Vietnamese).commands.language.description,
  'zh-CN': getI18n(Locale.ChineseCN).commands.language.description,
  'zh-TW': getI18n(Locale.ChineseTW).commands.language.description
})
slashCommand.setName('setting')

const setting = WrapDataManager.toCommandPack({
  data: slashCommand,
  instance: instance(SettingCommand)
})

export default setting
