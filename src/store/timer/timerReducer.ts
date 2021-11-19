import { Reducer } from 'redux'
import { ETimerActionTypes, TTimerActionTypes } from './timerTypes'

export enum ETimerModes {
  WORK = 'WORK',
  BREAK = 'BREAK'
}

const initialState = {
  mode: ETimerModes.WORK,

  //count of passed work cycles
  workCycles: 1,
}
type TTimerState = typeof initialState

export const timerReducer: Reducer<TTimerState, TTimerActionTypes> =
  (state = initialState, action): TTimerState => {
    switch (action.type) {
      case ETimerActionTypes.INCREASE_TOTAL_POMODORO_COUNT:
        return {
          ...state,
          workCycles: state.workCycles + 1,
        }

      case ETimerActionTypes.SET_WORK_MODE:
      case ETimerActionTypes.SET_BREAK_MODE:
        return {
          ...state,
          mode: action.type === ETimerActionTypes.SET_WORK_MODE
            ? ETimerModes.WORK : ETimerModes.BREAK,
        }

      default:
        return state
    }
  }