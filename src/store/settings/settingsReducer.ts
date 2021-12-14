import { Reducer } from 'redux'
import { minToMs } from '../../utils/dateAndTime'
import { TThemeNames } from '../../theme'
import { ESettingsTypes, TSettingsActions } from './settingsTypes'

//all time in ms
const initialState = {
  onePomodoroTime: minToMs(25),
  shortBreakTime: minToMs(5),
  longBreakTime: minToMs(20),
  longBreakInterval: 4,
  timerSpeedRatio: 1,
  theme: 'LIGHT_THEME' as TThemeNames,
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
    }

    return newState
  }