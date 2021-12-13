import 'styled-components'
import { Theme } from './theme/themeTypes'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}