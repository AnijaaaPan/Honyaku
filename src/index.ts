import { Client, Events, GatewayIntentBits, Partials } from 'discord.js'
import clientReady from './handlers/clientReady'
import interactionCreate from './handlers/interactionCreate'
import messageReactionAdd from './handlers/messageReactionAdd'
import { errorHandling } from './handlers/unhandledRejection'
import { Env } from './lib/Env'

export const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.GuildMessageReactions],
  partials: [Partials.Message, Partials.Channel, Partials.Reaction]
})

client.once(Events.ClientReady, clientReady)
client.on(Events.MessageReactionAdd, messageReactionAdd)
client.on(Events.InteractionCreate, interactionCreate)

process.on('unhandledRejection', errorHandling)

client.login(Env.token)
