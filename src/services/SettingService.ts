import { Locale } from 'discord.js'
import { SubscribeTypes } from '~/constants/redis'
import { Setting } from '~/interfaces/IRedis'
import WrapDataManager from '~/managers/WrapDataManager'
import { Service } from '.'

export default class SettingService extends Service<Setting> {
  constructor(protected guildId: string) {
    super(guildId, 'settings')
  }

  public async initData() {
    const data = await this.getData()
    const languages = data?.languages ?? []

    const localeValues = Object.values(Locale)
    const newLocaleValues = localeValues.filter(locale => {
      return !languages.some(language => language.locale === locale)
    })
    if (newLocaleValues.length === 0) {
      return WrapDataManager.castToType<Setting>(data)
    }

    const newDatas = newLocaleValues.map(locale => {
      const language = WrapDataManager.toSettingLanguage({
        locale,
        isSet: false
      })
      return language
    })

    languages.push(...newDatas)
    const setting = WrapDataManager.toSetting({
      subscribeType: SubscribeTypes.free,
      languages
    })
    await this.saveData(setting)
    return setting
  }
}
