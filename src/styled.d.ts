import 'styled-components'
import { Theme } from './utils/constants/themes.constants'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}