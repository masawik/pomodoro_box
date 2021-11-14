import { ETimerActionTypes, TTimerIncreaseCount } from './timerTypes'

export const timerIncreaseCount = (): TTimerIncreaseCount =>
  ({ type: ETimerActionTypes.INCREASE_TOTAL_POMODORO_COUNT })
