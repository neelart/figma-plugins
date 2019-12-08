/* global figma */
import { saveSettings } from '@create-figma-plugin/utilities'
import { defaultSettings } from '../default-settings'

export default async function () {
  await saveSettings(defaultSettings)
  figma.closePlugin('Reset')
}
