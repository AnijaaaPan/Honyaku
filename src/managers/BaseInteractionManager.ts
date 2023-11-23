import { ButtonInteraction, CommandInteraction } from 'discord.js'
import BaseManager from './BaseManager'
import CommandManager from './commands/CommandManager'

export default abstract class BaseInteractionManager extends BaseManager {
  constructor(protected commandManager: CommandManager<CommandInteraction | ButtonInteraction>) {
    super()
  }

  protected override async handleError(error: Error) {
    await this.commandManager.onError(error)
  }
}