import { ButtonInteraction, ChatInputCommandInteraction, LocaleString, MessageContextMenuCommandInteraction } from 'discord.js'
import BaseManager from './BaseManager'
import CommandManager from './commands/CommandManager'

export default abstract class BaseInteractionManager<T extends ChatInputCommandInteraction | ButtonInteraction | MessageContextMenuCommandInteraction> extends BaseManager {
  constructor(protected commandManager: CommandManager<T>) {
    super()
  }

  protected override async handleError(error: Error) {
    await this.commandManager.onError(error)
  }

  protected getLocalizedName(locale: LocaleString) {
    const { i18n } = this.commandManager
    return i18n.localizedNames[locale]
  }
}