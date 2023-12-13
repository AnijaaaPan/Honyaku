import { HowToUseTypes } from '~/constants/ids'

export type HowToUseTypeKeys = keyof typeof HowToUseTypes
export type HowToUseTypeValues = typeof HowToUseTypes[HowToUseTypeKeys]