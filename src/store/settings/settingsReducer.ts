import { Reducer } from 'redux'

//all time in seconds
const initialState = {
  pomodoro: 25 * 60,
  shortBreak: 5 * 60,
  longBreak: 20 * 60,
  longBreakInterval: 4,
}

type TSettingsState = typeof initialState

// @ts-ignore
export const settingsReducer: Reducer<TSettingsState, unknown> =
  (state = initialState): TSettingsState => {
    return state
  }