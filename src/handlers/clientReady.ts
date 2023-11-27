import Logger from '~/lib/Logger'
import { redisConnect } from '~/lib/Redis'
import { client } from '..'

export default function clientReady() {
  redisConnect()
  Logger.info(`Logged in: ${client.user?.tag}`)
}

