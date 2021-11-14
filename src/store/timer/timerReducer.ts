import { Reducer } from 'redux'
import { ETimerActionTypes, TTimerActionTypes } from './timerTypes'

const initialState = {
  count: 0,
}
type TTimerState = typeof initialState

export const timerReducer: Reducer<TTimerState, TTimerActionTypes> =
  (state = initialState, action): TTimerState => {
    switch (action.type) {
      case ETimerActionTypes.INCREASE_TOTAL_POMODORO_COUNT:
        return {
          ...state,
          count: state.count + 1,
        }

      default:
        return state
    }
  }