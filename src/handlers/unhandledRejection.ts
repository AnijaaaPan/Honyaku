import Logger from '~/lib/Logger'

export function errorHandling(error: unknown) {
  const e = error as Error
  Logger.error(`\`\`\`js\n${e.stack}\`\`\``)
}