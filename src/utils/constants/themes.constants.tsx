interface IColor {
  dark?: string,
  normal: string,
  light?: string
}

export interface IColors {
  primary: IColor,
  danger: IColor
}

export interface Theme {
  colors: IColors,
  fontColor: string,
  layoutWidth: number,
  linkColor: keyof IColors,
  transitionDuration: number
}

const LIGHT_THEME_COLORS: IColors = {
  primary: {
    dark: '#899441',
    normal: '#a8b64f',
  },
  danger: {
    dark: '#B7280F',
    normal: '#dc3e22',
    light: '#ee735d'
  },
}

export const LIGHT_THEME: Theme = {
  colors: LIGHT_THEME_COLORS,
  fontColor: '#fff',
  layoutWidth: 1280,
  linkColor: 'danger',
  transitionDuration: 300
}