export enum EThemeNames {
  DARK = 'DARK',
  LIGHT = 'LIGHT'
}

interface IColor {
  dark?: string,
  normal: string,
  light?: string
}

export interface IColors {
  primary: IColor,
  danger: IColor,
  secondary: IColor,
  focus: IColor,
  info: IColor,
  pauses: IColor
}

export interface Theme {
  name: EThemeNames,
  colors: IColors,
  textColor: string,
  invertedTextColor: string,
  layoutWidth: number,
  linkColor: keyof IColors,
  transitionDuration: number,
  backgroundColor: string,
  shadowColor: string
}