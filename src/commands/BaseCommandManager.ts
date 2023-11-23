import { CommandInteraction, CommandInteractionOptionResolver } from 'discord.js'
import BaseInteractionManager from '~/managers/BaseInteractionManager'
import CommandManager from '~/managers/commands/CommandManager'
import WrapDataManager from '~/managers/generals/WrapDataManager'

export abstract class BaseCommandManager extends BaseInteractionManager {
  options: CommandInteractionOptionResolver

  constructor(protected commandManager: CommandManager<CommandInteraction>) {
    super(commandManager)

    const { interaction } = commandManager
    this.options = WrapDataManager.castToType<CommandInteractionOptionResolver>(interaction.options)
  }
}
