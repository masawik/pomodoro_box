/* eslint-disable no-plusplus */
import { Reducer } from 'redux'
import { EStatisticActionTypes, TStatisticActions } from './statisticTypes'
import { getTodayAbsoluteTime } from '../../utils/dateAndTime'

type TDayTimeInTimestamp = number
type TMilliseconds = number

const initialDayStatisticState = {
  workTime: 0 as TMilliseconds,
  pauseTime: 0 as TMilliseconds,
  countOfPomodoros: 0 as number,
  countOfPauses: 0 as number,
}

type TDayStatisticState = typeof initialDayStatisticState

interface IStatisticState {
  days: {
    [key: TDayTimeInTimestamp]: TDayStatisticState
  },
  selectedDay: keyof IStatisticState['days'] | 0
}

//test object
// const initialState: IStatisticState = {
//   minuteStatistic: {
//     1637269200000: {
//       workTime: 56,
//       countOfPomodoros: 2,
//       pauseTime: 9 * 60,
//       countOfPauses: 5,
//     },
//   },
//   selectedDay: 0,
// }

const initialState: IStatisticState = {
  days: {},
  selectedDay: 0,
}

initialState.selectedDay = getTodayAbsoluteTime()

export const statisticReducer: Reducer<IStatisticState, TStatisticActions> =
  (
    state = initialState,
    action
  ): IStatisticState => {
    const newState = { ...state }
    const todayTime = getTodayAbsoluteTime()
    if (!newState.days[todayTime])
      newState.days[todayTime] = { ...initialDayStatisticState }

    switch (action.type) {
      case EStatisticActionTypes.STATISTIC_ADD_MINUTE:
        newState.days[todayTime].workTime++
        return newState

      case EStatisticActionTypes.STATISTIC_ADD_POMODORO:
        newState.days[todayTime].countOfPomodoros++
        return newState

      case EStatisticActionTypes.STATISTIC_ADD_PAUSE:
        newState.days[todayTime].countOfPauses++
        return newState

      case EStatisticActionTypes.STATISTIC_ADD_PAUSE_TIME: {
        let todayPauseTime = newState.days[todayTime].pauseTime
        newState.days[todayTime].pauseTime =
          todayPauseTime + action.payload.pauseDuration
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