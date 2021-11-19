import { Action, Reducer } from 'redux'

//all time in seconds
const initialState = {
  pomodoro: 25 * 60,
  shortBreak: 5 * 60,
  longBreak: 20 * 60,
  longBreakInterval: 4,
  timerSpeedRatio: 1,
}

type TSettingsState = typeof initialState
type TSettingsActions = Action

export const settingsReducer: Reducer<TSettingsState, TSettingsActions> =
  (state = initialState): TSettingsState => {
    return state
  }