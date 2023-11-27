import { LocaleString } from 'discord.js'
import BaseManager from './BaseManager'
import CommandManager from './commands/CommandManager'

export default abstract class BaseInteractionManager extends BaseManager {
  constructor(protected commandManager: CommandManager) {
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