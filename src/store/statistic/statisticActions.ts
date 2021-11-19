import {
  EStatisticActionTypes,
  TStatisticAddMinute, TStatisticAddPomodoro,
  TStatisticSetSelectedDay,
} from './statisticTypes'

export const statisticAddMinute = (): TStatisticAddMinute =>
  ({ type: EStatisticActionTypes.STATISTIC_ADD_MINUTE })

export const statisticAddPomodoro = (): TStatisticAddPomodoro =>
  ({ type: EStatisticActionTypes.STATISTIC_ADD_POMODORO })

export const statisticSetSelectedDay =
  (dayTime: number): TStatisticSetSelectedDay =>
    ({
      type: EStatisticActionTypes.STATISTIC_SET_SELECTED_DAY,
      payload: { dayTime },
    })
