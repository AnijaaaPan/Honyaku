import { Locale } from 'discord.js'
import { Setting } from '~/interfaces/IRedis'
import WrapDataManager from '~/managers/WrapDataManager'
import { Service } from '.'

export default class SettingService extends Service<Setting> {
  constructor(protected guildId: string) {
    super(guildId, 'settings')
  }

  public async initData() {
    const datas = await this.getDatas()
    const localeValues = Object.values(Locale)
    const newLocaleValues = localeValues.filter(locale => {
      return !datas.some(data => data.locale === locale)
    })
    if (newLocaleValues.length === 0) return

    const newDatas = newLocaleValues.map(locale => {
      const setting = WrapDataManager.toSetting({
        locale,
        isSet: false
      })
      return setting
    })

    const initDatas = [...datas, ...newDatas]
    await this.saveData(initDatas)
    return initDatas
  }
}
