import commands from '~/commands'
import Logger from '~/lib/Logger'
import { redisConnect } from '~/lib/Redis'
import SettingService from '~/services/SettingService'
import { client } from '..'

export default async function clientReady() {
  redisConnect()
  Logger.info(`Logged in: ${client.user?.tag}`)

  await client.application?.commands.set(commands.map((d) => d.data))

  const guilds = await client.guilds.fetch()
  await Promise.all(
    guilds.map(async (guild) => {
      const settingService = new SettingService(guild.id)
      await settingService.initData()
    })
  )
}

