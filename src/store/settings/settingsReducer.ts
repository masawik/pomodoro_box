import { Reducer } from 'redux'

//all time in seconds
const initialState = {
  pomodoro: 1,
  shortBreak: 2,
  longBreak: 4,
  longBreakInterval: 3,
  timerSpeedRatio: 1
}

type TSettingsState = typeof initialState

// @ts-ignore
export const settingsReducer: Reducer<TSettingsState, unknown> =
  (state = initialState): TSettingsState => {
    return state
  }