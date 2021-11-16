import {
  ETimerActionTypes,
  TTimerIncreaseCount, TTimerSetBreakMode,
  TTimerSetWorkMode,
} from './timerTypes'

export const timerIncreaseWorkCycles = (): TTimerIncreaseCount =>
  ({ type: ETimerActionTypes.INCREASE_TOTAL_POMODORO_COUNT })

export const timerSetWorkMode = (): TTimerSetWorkMode =>
  ({ type: ETimerActionTypes.SET_WORK_MODE })

export const timerSetBreakMode = (): TTimerSetBreakMode =>
  ({ type: ETimerActionTypes.SET_BREAK_MODE })