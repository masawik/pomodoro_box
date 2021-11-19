/* eslint-disable no-plusplus */
import { Reducer } from 'redux'
import { EStatisticActionTypes, TStatisticActions } from './statisticTypes'
import { getTodayAbsoluteTime, minToMs } from '../../utils/dateAndTime'

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

// test object
const initialState: IStatisticState = {
  days: {
    1637269200000: {
      workTime: 30 * 60 * 1000,
      countOfPomodoros: 1,
      pauseTime: 15000,
      countOfPauses: 2,
    },
  },
  selectedDay: 0,
}

// const initialState: IStatisticState = {
//   days: {},
//   selectedDay: 0,
// }

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
      case EStatisticActionTypes.STATISTIC_ADD_MINUTE: {
        const todayWorkTime = newState.days[todayTime].workTime
        newState.days[todayTime].workTime =
          todayWorkTime + minToMs(1)
      }
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