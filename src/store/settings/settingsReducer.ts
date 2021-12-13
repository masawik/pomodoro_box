import { Reducer } from 'redux'
import { minToMs } from '../../utils/dateAndTime'
import { DARK_THEME, LIGHT_THEME, TThemes } from '../../theme'
import { ESettingsTypes, TSettingsActions } from './settingsTypes'

//all time in ms
const initialState = {
  onePomodoroTime: minToMs(25),
  shortBreakTime: minToMs(5),
  longBreakTime: minToMs(20),
  longBreakInterval: 4,
  timerSpeedRatio: 1,
  theme: LIGHT_THEME as TThemes,
}

type TSettingsState = typeof initialState

export const settingsReducer: Reducer<TSettingsState, TSettingsActions> =
  (
    state = initialState,
    action
  ): TSettingsState => {
    switch (action.type) {
      case ESettingsTypes.THEME_SET_DARK:
        return {
          ...state,
          theme: DARK_THEME,
        }

      case ESettingsTypes.THEME_SET_LIGHT:
        return {
          ...state,
          theme: LIGHT_THEME,
        }
        
      default:
        return state
    }
  }