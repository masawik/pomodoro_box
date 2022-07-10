import 'styled-components'
import { Theme } from './styles/theme/themeTypes'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}