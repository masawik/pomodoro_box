export enum EStatisticActionTypes {
  STATISTIC_ADD_MINUTE = 'STATISTIC_ADD_MINUTE',
  STATISTIC_ADD_POMODORO = 'STATISTIC_ADD_POMODORO',
  STATISTIC_ADD_PAUSE = 'STATISTIC_ADD_PAUSE',
  STATISTIC_ADD_PAUSE_TIME = 'STATISTIC_ADD_PAUSE_TIME',
  STATISTIC_SET_SELECTED_DAY = 'STATISTIC_SET_SELECTED_DAY'
}

export type TStatisticAddMinute =
  { type: EStatisticActionTypes.STATISTIC_ADD_MINUTE }

export type TStatisticAddPomodoro =
  { type: EStatisticActionTypes.STATISTIC_ADD_POMODORO }

export type TStatisticAddPause =
  { type: EStatisticActionTypes.STATISTIC_ADD_PAUSE }

export type TStatisticSetSelectedDay =
  {
    type: EStatisticActionTypes.STATISTIC_SET_SELECTED_DAY,
    payload: { dayTime: number }
  }

export type TStatisticAddPauseTime =
  {
    type: EStatisticActionTypes.STATISTIC_ADD_PAUSE_TIME,
    payload: { secondsToAdd: number }
  }

export type TStatisticActions =
  TStatisticAddMinute
  | TStatisticSetSelectedDay
  | TStatisticAddPomodoro
  | TStatisticAddPause
  | TStatisticAddPauseTime