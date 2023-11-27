import { KEY_SEPARATOR, REDIS_KEYS } from '~/constants/redis'
import { RedisKeys } from '~/interfaces/IRedis'
import { redis } from '~/lib/Redis'
import WrapDataManager from '~/managers/WrapDataManager'

export class Service<T> {
  constructor(
    protected guildId: string,
    protected keys: RedisKeys
  ) { }

  private generateKey(...optionKeys: string[]) {
    const keys = [...REDIS_KEYS[this.keys], ...optionKeys]
    return keys
  }

  public async getData(...optionKeys: string[]) {
    const keys = this.generateKey(...optionKeys)
    const key = [this.guildId, ...keys].join(KEY_SEPARATOR)
    const res = await redis.get(key)
    const data = JSON.parse(res || 'null')
    return WrapDataManager.castToType<T | null>(data)
  }

  public async getDatas(...optionKeys: string[]) {
    const keys = this.generateKey(...optionKeys)
    const key = [this.guildId, ...keys].join(KEY_SEPARATOR)
    const res = await redis.get(key)
    const data = JSON.parse(res || '[]')
    return WrapDataManager.castToType<T[]>(data)
  }

  public async getKeys(...optionKeys: string[]): Promise<string[]> {
    const keys = this.generateKey(...optionKeys)
    const key = [this.guildId, ...keys, '*'].join(KEY_SEPARATOR)
    const getKeys = await redis.keys(key)
    return getKeys
  }

  public async addData(data: T) {
    const datas = await this.getDatas()
    const newDatas = [...datas, data]
    await this.saveData(newDatas)
  }

  public async saveData(body: unknown, ...optionKeys: string[]) {
    const keys = this.generateKey(...optionKeys)
    const key = [this.guildId, ...keys].join(KEY_SEPARATOR)
    await redis.set(key, JSON.stringify(body))
  }

  public async deleteData(...optionKeys: string[]) {
    const keys = this.generateKey(...optionKeys)
    const key = [this.guildId, ...keys].join(KEY_SEPARATOR)
    await redis.del(key)
  }
}
