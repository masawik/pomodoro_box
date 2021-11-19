export enum EStatisticActionTypes {
  STATISTIC_ADD_MINUTE = 'STATISTIC_ADD_MINUTE'
}

export type TStatisticAddMinute =
  { type: EStatisticActionTypes.STATISTIC_ADD_MINUTE }

export type TStatisticActions =
  TStatisticAddMinute