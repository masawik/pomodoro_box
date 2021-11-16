export enum ETimerActionTypes {
  INCREASE_TOTAL_POMODORO_COUNT = 'INCREASE_TOTAL_POMODORO_COUNT',
  SET_WORK_MODE = 'SET_WORK_MODE',
  SET_BREAK_MODE = 'SET_BREAK_MODE'
}

export type TTimerIncreaseCount =
  { type: ETimerActionTypes.INCREASE_TOTAL_POMODORO_COUNT }

export type TTimerSetWorkMode =
  { type: ETimerActionTypes.SET_WORK_MODE }

export type TTimerSetBreakMode =
  { type: ETimerActionTypes.SET_BREAK_MODE }

export type TTimerActionTypes =
  TTimerIncreaseCount
  | TTimerSetWorkMode
  | TTimerSetBreakMode