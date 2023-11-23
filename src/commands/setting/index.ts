import { Locale, PermissionsBitField } from 'discord.js'
import { instance } from '~/interfaces/commands/IBaseCommand'
import WrapDataManager from '~/managers/generals/WrapDataManager'
import { langLocal } from '~/utils/discord'
import SettingCommand from './main'

const setting = WrapDataManager.toCommandPack({
  data: {
    defaultMemberPermissions: PermissionsBitField.Flags.Administrator,
    description: langLocal().commands.language.description,
    descriptionLocalizations: {
      bg: langLocal(Locale.Bulgarian).commands.language.description,
      cs: langLocal(Locale.Czech).commands.language.description,
      da: langLocal(Locale.Danish).commands.language.description,
      de: langLocal(Locale.German).commands.language.description,
      el: langLocal(Locale.Greek).commands.language.description,
      'en-GB': langLocal(Locale.EnglishGB).commands.language.description,
      'en-US': langLocal(Locale.EnglishUS).commands.language.description,
      'es-ES': langLocal(Locale.SpanishES).commands.language.description,
      fi: langLocal(Locale.Finnish).commands.language.description,
      fr: langLocal(Locale.French).commands.language.description,
      hi: langLocal(Locale.Hindi).commands.language.description,
      hr: langLocal(Locale.Croatian).commands.language.description,
      hu: langLocal(Locale.Hungarian).commands.language.description,
      id: langLocal(Locale.Indonesian).commands.language.description,
      it: langLocal(Locale.Italian).commands.language.description,
      ja: langLocal(Locale.Japanese).commands.language.description,
      ko: langLocal(Locale.Korean).commands.language.description,
      lt: langLocal(Locale.Lithuanian).commands.language.description,
      nl: langLocal(Locale.Dutch).commands.language.description,
      no: langLocal(Locale.Norwegian).commands.language.description,
      pl: langLocal(Locale.Polish).commands.language.description,
      'pt-BR': langLocal(Locale.PortugueseBR).commands.language.description,
      ro: langLocal(Locale.Romanian).commands.language.description,
      ru: langLocal(Locale.Russian).commands.language.description,
      'sv-SE': langLocal(Locale.Swedish).commands.language.description,
      th: langLocal(Locale.Thai).commands.language.description,
      tr: langLocal(Locale.Turkish).commands.language.description,
      uk: langLocal(Locale.Ukrainian).commands.language.description,
      vi: langLocal(Locale.Vietnamese).commands.language.description,
      'zh-CN': langLocal(Locale.ChineseCN).commands.language.description,
      'zh-TW': langLocal(Locale.ChineseTW).commands.language.description
    },
    name: 'setting'
  },
  instance: instance(SettingCommand)
})

export default setting
