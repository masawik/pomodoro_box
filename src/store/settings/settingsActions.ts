import {
  ESettingsTypes, TNewSettings, TSettingsReset,
  TSettingsThemeSetDark,
  TSettingsThemeSetLight, TSettingsUpdate,
} from './settingsTypes'

export const settingsThemeSetDark = (): TSettingsThemeSetDark =>
  ({ type: ESettingsTypes.THEME_SET_DARK })

export const settingsThemeSetLight = (): TSettingsThemeSetLight =>
  ({ type: ESettingsTypes.THEME_SET_LIGHT })

export const settingsReset = (): TSettingsReset =>
  ({ type: ESettingsTypes.SETTINGS_RESET })

export const settingsUpdate = (newSettings: TNewSettings): TSettingsUpdate =>
  ({ type: ESettingsTypes.SETTINGS_UPDATE, payload: newSettings })