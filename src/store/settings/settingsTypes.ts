export enum ESettingsTypes {
  THEME_SET_DARK = 'THEME_SET_DARK',
  THEME_SET_LIGHT = 'THEME_SET_LIGHT'
}

export type TSettingsThemeSetDark =
  { type: ESettingsTypes.THEME_SET_DARK }

export type TSettingsThemeSetLight =
  { type: ESettingsTypes.THEME_SET_LIGHT }

export type TSettingsActions =
  TSettingsThemeSetDark
  | TSettingsThemeSetLight