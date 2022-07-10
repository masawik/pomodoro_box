import { Reducer } from 'redux'
import { minToMs } from '../../utils/dateAndTime'
import { TThemeNames } from '../../styles/theme'
import { ESettingsTypes, TSettingsActions } from './settingsTypes'

//all time in ms
const initialState = {
  onePomodoroTime: minToMs(25),
  shortBreakTime: minToMs(5),
  longBreakTime: minToMs(20),
  longBreakInterval: 4,
  timerSpeedRatio: 1,
  theme: 'LIGHT_THEME' as TThemeNames,
  timerEndNotificationEnabled: true,
}

export type TSettingsState = typeof initialState

export const settingsReducer: Reducer<TSettingsState, TSettingsActions> =
  (
    state = initialState,
    action
  ): TSettingsState => {
    let newState = { ...state }

    switch (action.type) {
      case ESettingsTypes.THEME_SET_DARK:
        newState.theme = 'DARK_THEME'
        break

      case ESettingsTypes.THEME_SET_LIGHT:
        newState.theme = 'LIGHT_THEME'
        break

      case ESettingsTypes.SETTINGS_RESET:
        return { ...initialState, theme: newState.theme }

      case ESettingsTypes.SETTINGS_UPDATE: {
        const newSettings = action.payload
        newState = { ...newState, ...newSettings }
        break
      }

      default:
        return state
    }

    return newState
  }