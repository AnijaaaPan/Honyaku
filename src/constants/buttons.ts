import { ButtonBuilder, ButtonStyle } from 'discord.js'
import { CUSTOM_IDS } from '~/constants/ids'

export const BUTTON_ON = new ButtonBuilder().setCustomId(CUSTOM_IDS.ON).setStyle(ButtonStyle.Secondary).setEmoji('✅')
export const BUTTON_OFF = new ButtonBuilder().setCustomId(CUSTOM_IDS.OFF).setStyle(ButtonStyle.Secondary).setEmoji('❌')
