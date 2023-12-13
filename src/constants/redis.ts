export const KEY_SEPARATOR = ':'

export const REDIS_KEYS = {
  settings: ['settings'],
} as const

export const SubscribeTypes = {
  free: 1,
  subscribe: 2,
  partner: 3,
  official: 4
} as const