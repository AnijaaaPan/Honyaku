import commands from '~/commands'
import Logger from '~/lib/Logger'
import { redisConnect } from '~/lib/Redis'
import SettingService from '~/services/SettingService'
import { client } from '..'

export default async function clientReady() {
  redisConnect()
  Logger.info(`Logged in: ${client.user?.tag}`)

  await client.application?.commands.set(commands.map((d) => d.data))

  client.guilds.cache.forEach(async (guild) => {
    const settingService = new SettingService(guild.id)
    await settingService.initData()
  })
}

