import { Interaction } from 'discord.js'
import commands from '~/commands'
import CommandManager from '~/managers/CommandManager'

export default async function interactionCreate(interaction: Interaction) {
  if (!interaction.isChatInputCommand() && !interaction.isContextMenuCommand()) return

  const commandManager = new CommandManager(interaction)
  const command = commands.find((c) => c.data.name === interaction.commandName)
  await command?.instance(commandManager).execute().catch(() => { })
}