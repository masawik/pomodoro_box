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
  },
  selectedDay: keyof IStatisticState['minuteStatistic'] | 0
}


//test object
const initialState: IStatisticState = {
  minuteStatistic: {
    1636837200000: {
      countOfMinutes: 112,
      countOfPomodoros: 3,
    },
    1636923600000: {
      countOfMinutes: 51,
      countOfPomodoros: 2,
    },
    1637010000000: {
      countOfMinutes: 12,
      countOfPomodoros: 0,
    },
    1637096400000: {
      countOfMinutes: 6,
      countOfPomodoros: 0,
    },
    1637182800000: {
      countOfMinutes: 60,
      countOfPomodoros: 6,
    },
    1637269200000: {
      countOfMinutes: 0,
      countOfPomodoros: 0,
    },
  },
  selectedDay: 0,
}

initialState.selectedDay = getTodayAbsoluteTime()

// const initialState: IStatisticState = {
//   minuteStatistic: {},
// }

export const statisticReducer: Reducer<IStatisticState, TStatisticActions> =
  (
    state = initialState,
    action
  ): IStatisticState => {
    switch (action.type) {
      case EStatisticActionTypes.STATISTIC_ADD_MINUTE: {
        const newState = { ...state }
        const todayTime = getTodayAbsoluteTime()
        const todayMinutes = newState
          .minuteStatistic[todayTime].countOfMinutes | 0

        newState.minuteStatistic[todayTime].countOfMinutes = todayMinutes + 1
        return newState
      }

      case EStatisticActionTypes.STATISTIC_ADD_POMODORO: {
        const newState = { ...state }
        const todayTime = getTodayAbsoluteTime()
        const todayPomodoros = newState
          .minuteStatistic[todayTime].countOfPomodoros | 0

        newState.minuteStatistic[todayTime].countOfPomodoros =
          todayPomodoros + 1
        return newState
      }

      case EStatisticActionTypes.STATISTIC_SET_SELECTED_DAY:
        return {
          ...state,
          selectedDay: action.payload.dayTime,
        }

      default:
        return state
    }
  }