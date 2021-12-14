/* eslint-disable no-plusplus */
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
    const newState = { ...state }

    switch (action.type) {
      case ETimerActionTypes.INCREASE_TOTAL_POMODORO_COUNT:
        newState.workCycles++
        break

      case ETimerActionTypes.SET_WORK_MODE:
      case ETimerActionTypes.SET_BREAK_MODE:
        newState.mode =
          action.type === ETimerActionTypes.SET_WORK_MODE
            ? ETimerModes.WORK
            : ETimerModes.BREAK
        break
    }

    return newState
  }