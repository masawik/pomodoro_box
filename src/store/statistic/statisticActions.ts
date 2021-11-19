import {
  EStatisticActionTypes,
  TStatisticAddMinute,
  TStatisticAddPause,
  TStatisticAddPauseTime,
  TStatisticAddPomodoro,
  TStatisticSetSelectedDay,
} from './statisticTypes'

export const statisticAddMinute = (): TStatisticAddMinute =>
  ({ type: EStatisticActionTypes.STATISTIC_ADD_MINUTE })

export const statisticAddPomodoro = (): TStatisticAddPomodoro =>
  ({ type: EStatisticActionTypes.STATISTIC_ADD_POMODORO })

export const statisticAddPause = (): TStatisticAddPause =>
  ({ type: EStatisticActionTypes.STATISTIC_ADD_PAUSE })

export const statisticSetSelectedDay =
  (dayTime: number): TStatisticSetSelectedDay =>
    ({
      type: EStatisticActionTypes.STATISTIC_SET_SELECTED_DAY,
      payload: { dayTime },
    })

export const statisticAddPauseTime =
  (pauseDuration: number): TStatisticAddPauseTime =>
    ({
      type: EStatisticActionTypes.STATISTIC_ADD_PAUSE_TIME,
      payload: { pauseDuration: pauseDuration },
    })