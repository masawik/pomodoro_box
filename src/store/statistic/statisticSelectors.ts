import { TRootState } from '../rootReducer'

export const selectStatistic = (state: TRootState) => state.statistic

export const selectStatisticDays = (state: TRootState) => state.statistic.days
export const selectStatisticSelectedDay =
  (state: TRootState) => state.statistic.selectedDay
