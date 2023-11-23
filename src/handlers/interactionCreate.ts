import { Interaction } from 'discord.js'
import commands from '~/commands'
import CommandManager from '~/managers/commands/CommandManager'

export default async function interactionCreate(interaction: Interaction) {
  if (!interaction.isCommand()) return

  const commandManager = new CommandManager(interaction)
  const command = commands.find((c) => c.data.name === interaction.commandName)
  await command?.instance(commandManager).execute()
}
