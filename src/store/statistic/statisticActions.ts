import { EStatisticActionTypes, TStatisticAddMinute } from './statisticTypes'

export const statisticAddMinute = (): TStatisticAddMinute =>
  ({ type: EStatisticActionTypes.STATISTIC_ADD_MINUTE })
