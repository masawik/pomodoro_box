import { Reducer } from 'redux'
import { EStatisticActionTypes, TStatisticActions } from './statisticTypes'
import { getTodayAbsoluteTime } from '../../utils/date'

type TDayTimeInTimestamp = number

interface IDailyMinuteStatistic {
  countOfMinutes: number,
  countOfPomodoros: number
}

interface IStatisticState {
  minuteStatistic: {
    [key: TDayTimeInTimestamp]: IDailyMinuteStatistic
  }
}


//test object
// const initialState: IStatisticState = {
//   minuteStatistic: {
//     1636837200000: 112,
//     1636923600000: 64,
//     1637010000000: 51,
//     1637096400000: 0,
//     1637182800000: 15,
//     1637269200000: 12,
//   },
// }

const initialState: IStatisticState = {
  minuteStatistic: {},
}

export const statisticReducer: Reducer<IStatisticState, TStatisticActions> =
  (
    state = initialState,
    action
  ): IStatisticState => {
    switch (action.type) {
      case EStatisticActionTypes.STATISTIC_ADD_MINUTE:
        const newState = { ...state }
        const todayTime = getTodayAbsoluteTime()
        const todayMinutes = newState
          .minuteStatistic[todayTime].countOfMinutes | 0

        newState.minuteStatistic[todayTime].countOfMinutes = todayMinutes + 1
        return newState

      default:
        return state
    }
  }