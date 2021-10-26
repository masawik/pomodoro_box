import 'styled-components'
interface IColor {
  main: string,
  light: string
}

declare module 'styled-components' {
  export interface IColors {
    primary: IColor,
    danger: IColor
  }

  export interface DefaultTheme {
    colors: IColors,
    fontColor: string
  }
}