import WrapDataManager from '~/managers/WrapDataManager'
import help from './help'
import setting from './setting'
import translation from './translation'

const commands = WrapDataManager.toCommands(
  help,
  setting,
  translation
)

export default commands