import { DefaultStateKeys, DefaultStateValues } from '~/interfaces/ITextState'
import DefaultStateManager from '../status/DefaultStateManager'
import BaseTextManager from './BaseTextManager'

export default class TextManager extends BaseTextManager<DefaultStateKeys, DefaultStateValues> {
  constructor() {
    const defaultStateManager = new DefaultStateManager()
    super(defaultStateManager)
  }
}