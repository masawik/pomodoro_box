interface IColor {
  dark?: string,
  normal: string,
  light?: string
}

export interface IColors {
  primary: IColor,
  danger: IColor,
  secondary: IColor
}

export interface Theme {
  colors: IColors,
  textColor: string,
  invertedTextColor: string,
  layoutWidth: number,
  linkColor: keyof IColors,
  transitionDuration: number,
  backgroundColor: string
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
  secondary: {
    dark: '#999999',
    normal: '#C4C4C4',
    light: '#F4F4F4'
  }
}

export const LIGHT_THEME: Theme = {
  colors: LIGHT_THEME_COLORS,
  textColor: '#333',
  invertedTextColor: '#fff',
  layoutWidth: 1280,
  linkColor: 'danger',
  transitionDuration: 300,
  backgroundColor: '#fff'
}