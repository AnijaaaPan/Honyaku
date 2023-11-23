import { Locale } from 'discord.js'
import { Setting } from '~/interfaces/redis/ISetting'
import WrapDataManager from '~/managers/generals/WrapDataManager'
import { Service } from '.'

export default class SettingService extends Service<Setting> {
  constructor(protected guildId: string) {
    super(guildId, 'settings')
  }

  public async initData() {
    const datas = await this.getDatas()
    const localeValues = Object.values(Locale)
    const newFilterDatas = localeValues.filter(locale => {
      return datas.some(data => data.locale !== locale)
    })
    if (newFilterDatas.length === 0) return

    const newDatas = newFilterDatas.map(locale => {
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
