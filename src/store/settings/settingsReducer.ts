import { Action, Reducer } from 'redux'
import { minToMs } from '../../utils/dateAndTime'

//all time in ms
const initialState = {
  onePomodoroTime: minToMs(25),
  shortBreakTime: minToMs(5),
  longBreakTime: minToMs(20),
  longBreakInterval: 4,
  timerSpeedRatio: 1,
}

type TSettingsState = typeof initialState
type TSettingsActions = Action

export const settingsReducer: Reducer<TSettingsState, TSettingsActions> =
  (state = initialState): TSettingsState => {
    return state
  }