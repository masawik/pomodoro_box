export enum ESettingsTypes {
  THEME_SET_DARK = 'THEME_SET_DARK',
  THEME_SET_LIGHT = 'THEME_SET_LIGHT',
  SETTINGS_UPDATE = 'SETTINGS_UPDATE',
  SETTINGS_RESET = 'SETTINGS_RESET'
}

export type TSettingsThemeSetDark =
  { type: ESettingsTypes.THEME_SET_DARK }

export type TSettingsThemeSetLight =
  { type: ESettingsTypes.THEME_SET_LIGHT }

export type TNewSettings = {
  onePomodoroTime: number,
  shortBreakTime: number,
  longBreakTime: number,
  longBreakInterval: number,
  timerEndNotificationEnabled: boolean
}

export type TSettingsUpdate =
  {
    type: ESettingsTypes.SETTINGS_UPDATE, payload: TNewSettings
  }

export type TSettingsReset =
  { type: ESettingsTypes.SETTINGS_RESET }

export type TSettingsActions =
  TSettingsThemeSetDark
  | TSettingsThemeSetLight
  | TSettingsUpdate
  | TSettingsReset