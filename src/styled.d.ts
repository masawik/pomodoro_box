import 'styled-components'
import { Theme } from './theme/constants/lightTheme'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}