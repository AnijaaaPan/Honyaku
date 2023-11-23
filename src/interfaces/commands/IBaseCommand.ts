import { ApplicationCommandOptionData, ApplicationCommandSubCommandData, ApplicationCommandSubGroupData, ChatInputApplicationCommandData } from 'discord.js'
import { BaseCommandManager } from '~/commands/BaseCommandManager'

export type SubCommandOptionData = Exclude<ApplicationCommandOptionData, ApplicationCommandSubGroupData | ApplicationCommandSubCommandData>

interface BasePack {
  instance: ReturnType<typeof instance>
}

export interface CommandPack extends BasePack {
  data: ChatInputApplicationCommandData
}

export interface SubCommandPack extends BasePack {
  data: ApplicationCommandSubCommandData
}

export function instance<T extends typeof BaseCommandManager>(CommandType: new (...args: ConstructorParameters<T>) => BaseCommandManager) {
  return (...args: ConstructorParameters<T>) => new CommandType(...args)
}