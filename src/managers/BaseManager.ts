import { errorHandling } from '~/handlers/unhandledRejection'

export default abstract class BaseManager {
  protected abstract main(...args: any[]): Promise<void>

  public async execute(...args: any[]) {
    try {
      await this.main(...args)

    } catch (error) {
      await this.handleError(error as Error)
    }
  }

  protected async handleError(error: Error) {
    await errorHandling(error)
  }

  protected format(str: string, ...args: unknown[]) {
    for (const [i, arg] of args.entries()) {
      const regExp = new RegExp(`\\{${i}\\}`, 'g')
      str = str.replace(regExp, arg as string)
    }
    return str
  }
}