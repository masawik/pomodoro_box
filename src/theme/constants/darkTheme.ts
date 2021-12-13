import { IColors, Theme } from './lightTheme'

const DARK_THEME_COLORS: IColors = {
  primary: {
    dark: '#3bbfa6',
    normal: '#58ccb6',
  },
  danger: {
    dark: '#c14147',
    normal: '#cc6066',
    light: '#d3787c',
  },
  secondary: {
    dark: '#475475',
    normal: '#151c30',
    light: '#1f2a47',
  },
  focus: {
    normal: '#0051ca',
    light: '#005ae2',
  },
  info: {
    normal: '#636828',
    light: '#747a2f',
  },
  pauses: {
    normal: '#803d28',
    light: '#92462e',
  },
}

export const DARK_THEME: Theme = {
  colors: DARK_THEME_COLORS,
  textColor: '#fffff8',
  invertedTextColor: '#0c71bd',
  layoutWidth: 1280,
  linkColor: 'danger',
  transitionDuration: 300,
  backgroundColor: '#01081e',
  shadowColor: '#02103F',
}