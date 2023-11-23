import { BaseMessageOptions, InteractionReplyOptions, InteractionUpdateOptions } from 'discord.js'
import { CommandPack } from '~/interfaces/commands/IBaseCommand'
import { Setting } from '~/interfaces/redis/ISetting'

export default class WrapDataManager {
  public static castToType<T>(data: any) {
    return data as T
  }

  public static toCommandPack(data: CommandPack) {
    return data
  }

  public static toCommandPacks(...data: CommandPack[]) {
    return data
  }

  public static toMessageOptions(data: BaseMessageOptions) {
    return data
  }

  public static toInteractionReplyOptions(data: InteractionReplyOptions) {
    return data
  }

  public static toInteractionUpdateOptions(data: InteractionUpdateOptions) {
    return data
  }

  public static toSetting(data: Setting) {
    return data
  }
}