import { ChatInputApplicationCommandData } from 'discord.js'
import { BaseCommandManager } from '~/commands/BaseCommandManager'

interface BasePack {
  instance: ReturnType<typeof instance>
}

export interface CommandPack extends BasePack {
  data: ChatInputApplicationCommandData
}

export function instance<T extends typeof BaseCommandManager>(CommandType: new (...args: ConstructorParameters<T>) => BaseCommandManager) {
  return (...args: ConstructorParameters<T>) => new CommandType(...args)
}