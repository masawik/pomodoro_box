interface IColor {
  main: string,
  light: string
}

export interface IColors {
  primary: IColor,
  danger: IColor
}

const LIGHT_THEME_COLORS: IColors = {
  primary: {
    main: '#899441',
    light: '#a8b64f'
  },
  danger: {
    main: '#dc3e22',
    light: '#ee735d'
  }
}

export const LIGHT_THEME = {
  colors: LIGHT_THEME_COLORS
}