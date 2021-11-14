export enum ETimerActionTypes {
  INCREASE_TOTAL_POMODORO_COUNT = 'INCREASE_TOTAL_POMODORO_COUNT'
}

export type TTimerIncreaseCount =
  { type: ETimerActionTypes.INCREASE_TOTAL_POMODORO_COUNT }

export type TTimerActionTypes = TTimerIncreaseCount