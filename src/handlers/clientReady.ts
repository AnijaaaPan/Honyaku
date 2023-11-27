import interactionCommands from '~/interactions'
import Logger from '~/lib/Logger'
import { redisConnect } from '~/lib/Redis'
import SettingService from '~/services/SettingService'
import { client } from '..'

export default async function clientReady() {
  redisConnect()
  Logger.info(`Logged in: ${client.user?.tag}`)

  const guilds = await client.guilds.fetch()
  await Promise.all(
    guilds.map(async (guild) => {
      const settingService = new SettingService(guild.id)
      await settingService.initData()
    })
  )

  await client.application?.commands.set(interactionCommands.map((d) => d.data))
}

