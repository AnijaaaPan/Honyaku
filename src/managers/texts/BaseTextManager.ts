import { TextState } from '~/interfaces/ITextState'
import WrapDataManager from '../WrapDataManager'
import BaseStateManager from '../status/BaseStateManager'

export default class BaseTextManager<K extends string, V extends number> {
  private _textStates = WrapDataManager.castToType<TextState<K, V>[]>([])

  constructor(protected stateManager: BaseStateManager<K, V>) { }

  private _initTextState() {
    const key = WrapDataManager.castToType<K>(this.stateManager.stateKey)
    const value = WrapDataManager.castToType<V>(this.stateManager.state)

    const initTextState = WrapDataManager.castToType<TextState<K, V>>({
      key,
      value,
      contents: [],
      codeBlockTexts: []
    })
    return initTextState
  }

  public getTextState() {
    const value = WrapDataManager.castToType<V>(this.stateManager.state)
    let textState = this._textStates.find(state => state.value === value)

    if (!textState) {
      textState = this._initTextState()
      this._textStates.push(textState)
    }
    return textState
  }

  public addContent(...text: string[]) {
    const textState = this.getTextState()
    textState.contents.push(...text)
  }

  public addCodeBlockText(...text: string[]) {
    const textState = this.getTextState()
    textState.codeBlockTexts.push(...text)
  }

  public format() {
    const sortTextStates = this._textStates.sort((a, b) => a.value - b.value)
    return sortTextStates.map(textState => {
      const contents = WrapDataManager.castToType<string[]>([])
      if (textState.contents.length !== 0) {
        contents.push(this._formatContent(textState, '\n'))
      }
      if (textState.codeBlockTexts.length !== 0) {
        contents.push(this._formatCodeBlockText(textState, '\n'))
      }
      return contents.join('\n')
    }).join('\n')
  }

  private _formatContent(textState: TextState<K, V>, separator: string = '') {
    return textState.contents.join(separator)
  }

  private _formatCodeBlockText(textState: TextState<K, V>, separator: string = '') {
    const content = textState.codeBlockTexts.join(separator)
    return `\`\`\`ansi\n${content}\`\`\``
  }
}