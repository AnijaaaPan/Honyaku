import { DefaultStateMaps } from '~/constants/TextStateConstants'
import WrapDataManager from '../WrapDataManager'

export default class BaseStateManager<K extends string, V extends number> {
  private _key: K
  private _value: V

  constructor(private _stateMaps: Record<K, V>) {
    this._key = WrapDataManager.castToType<K>('default')
    this._value = WrapDataManager.castToType<V>(DefaultStateMaps.default)
  }

  public get state() {
    return this._value
  }

  public get stateKey() {
    return this._key
  }

  public updateState(key: K) {
    this._key = key
    this._value = this._stateMaps[key]
  }
}
