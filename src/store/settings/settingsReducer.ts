import { Reducer } from 'redux'
import { minToMs } from '../../utils/dateAndTime'
import { TThemeNames } from '../../theme'
import { ESettingsTypes, TSettingsActions } from './settingsTypes'

//all time in ms
const initialState = {
  onePomodoroTime: minToMs(1),
  shortBreakTime: minToMs(1),
  longBreakTime: minToMs(1),
  longBreakInterval: 4,
  timerSpeedRatio: 20,
  theme: 'LIGHT_THEME' as TThemeNames,
  timerEndNotificationEnabled: true
}

type TSettingsState = typeof initialState

export const settingsReducer: Reducer<TSettingsState, TSettingsActions> =
  (
    state = initialState,
    action
  ): TSettingsState => {
    const newState = { ...state }

    switch (action.type) {
      case ESettingsTypes.THEME_SET_DARK:
        newState.theme = 'DARK_THEME'
        break

      case ESettingsTypes.THEME_SET_LIGHT:
        newState.theme = 'LIGHT_THEME'
        break

      default:
        return state
    }

    return newState
  }