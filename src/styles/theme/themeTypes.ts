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
  colors: IColors,
  textColor: string,
  invertedTextColor: string,
  layoutWidth: number,
  linkColor: keyof IColors,
  transitionDuration: number,
  backgroundColor: string,
  shadowColor: string
}