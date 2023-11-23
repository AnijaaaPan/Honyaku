import { InteractionReplyOptions } from 'discord.js'

export class DefaultError extends Error {
  public name: string

  constructor(e?: string) {
    super(e)
    this.name = new.target.name

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, DefaultError)
    }

    Object.setPrototypeOf(this, new.target.prototype)
  }
}

export class CustomError extends DefaultError {
  constructor(public interactionReplyOptions: InteractionReplyOptions, e?: string) {
    super(e)
  }
}