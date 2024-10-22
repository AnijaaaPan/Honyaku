/* eslint-disable no-unused-vars */
import { LocaleString } from 'discord.js'

export default interface I18n {
  commands: {
    help: {
      description: string
      howToUseEmbed: {
        contents: string[]
        description: string
        title: string
      }
      embeds: [
        {
          contents: string[]
          description: string
          footer: {
            text: string
          }
          title: string
        },
        {
          contents: string[]
          type: string
        },
        {
          contents: string[]
          type: string
        }
      ]
    }
    language: {
      description: string
      embed: {
        footer: {
          text: string
        }
        title: string
      }
      maxDataLength: string
    }
    translation: {
      content: string
      selectLang: string
      undefined: string
    }
  }
  localizedNames: {
    [key in LocaleString]?: string
  }
}