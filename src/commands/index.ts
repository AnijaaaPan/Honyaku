import WrapDataManager from '~/managers/generals/WrapDataManager'
import setting from './setting'

const commandPacks = WrapDataManager.toCommandPacks(
  setting
)

export default commandPacks