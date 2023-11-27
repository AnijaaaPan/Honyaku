import { ContextMenuCommandBuilder, SlashCommandBuilder } from 'discord.js'
import BaseInteractionManager from '~/managers/BaseInteractionManager'

interface BasePack {
  instance: ReturnType<typeof instance>
}

export interface CommandPack extends BasePack {
  data: SlashCommandBuilder
}

export interface ContextPack extends BasePack {
  data: ContextMenuCommandBuilder
}

export function instance<T extends typeof BaseInteractionManager>(CommandType: new (...args: ConstructorParameters<T>) => BaseInteractionManager) {
  return (...args: ConstructorParameters<T>) => new CommandType(...args)
}