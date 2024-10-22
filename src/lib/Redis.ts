import Redis from 'ioredis'
import { Env } from './Env'
import Logger from './Logger'

export let redis: Redis

export function redisConnect() {
  redis = new Redis(Env.redisUrl, {
    tls: {
      rejectUnauthorized: false,
    },
  })
  Logger.info('**Redisに接続完了**')
}