import { DefaultStateMaps } from '../constants/TextStateConstants'

export interface TextState<K, V> {
  key: K,
  value: V,
  contents: string[]
  codeBlockTexts: string[]
}

export type DefaultStateKeys = keyof typeof DefaultStateMaps
export type DefaultStateValues = typeof DefaultStateMaps[DefaultStateKeys]