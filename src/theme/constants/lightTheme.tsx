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
  },
  focus: {
    normal: '#FFAE35',
    light: '#FFDDA9'
  },
  info: {
    normal: '#9C97D7',
    light: '#DFDCFE'
  },
  pauses: {
    normal: '#7FC2D7',
    light: '#C5F1FF'
  }
}

export const LIGHT_THEME: Theme = {
  colors: LIGHT_THEME_COLORS,
  textColor: '#333',
  invertedTextColor: '#fff',
  layoutWidth: 1280,
  linkColor: 'danger',
  transitionDuration: 300,
  backgroundColor: '#fff',
  shadowColor: '#f6f6f6'
}