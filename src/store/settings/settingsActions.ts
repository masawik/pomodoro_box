import {
  ESettingsTypes,
  TSettingsThemeSetDark,
  TSettingsThemeSetLight,
} from './settingsTypes'

export const settingsThemeSetDark = (): TSettingsThemeSetDark =>
  ({ type: ESettingsTypes.THEME_SET_DARK })

export const settingsThemeSetLight = (): TSettingsThemeSetLight =>
  ({ type: ESettingsTypes.THEME_SET_LIGHT })