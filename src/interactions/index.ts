import WrapDataManager from '~/managers/generals/WrapDataManager'
import setting from './setting'
import translation from './translation'

const commands = WrapDataManager.toCommands(
  setting,
  translation
)

export default commands