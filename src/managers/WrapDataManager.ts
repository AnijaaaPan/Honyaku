import { BaseMessageOptions, InteractionReplyOptions } from 'discord.js'
import { I18n } from '~/interfaces/II18n'
import { Setting } from '~/interfaces/IRedis'
import { CommandPack, ContextPack } from '~/interfaces/commands/IBaseCommand'
import { TranslationMessage } from '~/interfaces/commands/ITranslation'

export default class WrapDataManager {
  public static castToType<T>(data: any) {
    return data as T
  }

  public static toCommands(...data: (CommandPack | ContextPack)[]) {
    return data
  }

  public static toCommandPack(data: CommandPack) {
    return data
  }

  public static toContextPack(data: ContextPack) {
    return data
  }

  public static toMessageOptions(data: BaseMessageOptions) {
    return data
  }

  public static toInteractionReplyOptions(data: InteractionReplyOptions) {
    return data
  }

  public static toSetting(data: Setting) {
    return data
  }

  public static toTranslationMessage(data: TranslationMessage) {
    return data
  }

  public static toI18n(data: I18n) {
    return data
  }
}