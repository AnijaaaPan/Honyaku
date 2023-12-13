import { DefaultStateMaps } from '~/constants/TextStateConstants'
import { DefaultStateKeys, DefaultStateValues } from '~/interfaces/ITextState'
import BaseStateManager from './BaseStateManager'

export default class DefaultStateManager extends BaseStateManager<DefaultStateKeys, DefaultStateValues> {
  constructor() {
    super(DefaultStateMaps)
  }
}
