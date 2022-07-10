import { DARK_THEME } from './darkTheme'
import { LIGHT_THEME } from './lightTheme'

const themes = {
  DARK_THEME,
  LIGHT_THEME,
}
export default themes

export type TThemeNames = keyof typeof themes