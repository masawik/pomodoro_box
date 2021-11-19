import { Reducer } from 'redux'
import { EStatisticActionTypes, TStatisticActions } from './statisticTypes'
import { getTodayAbsoluteTime } from '../../utils/date'

type TDayTimeInTimestamp = number
type TMinutes = number
type TSeconds = number

interface IDailyMinuteStatistic {
  workTime: TMinutes,
  countOfPomodoros: number,
  countOfPauses: number,
  pauseTime: TSeconds
}

interface IStatisticState {
  minuteStatistic: {
    [key: TDayTimeInTimestamp]: IDailyMinuteStatistic
  },
  selectedDay: keyof IStatisticState['minuteStatistic'] | 0
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
  minuteStatistic: {},
  selectedDay: 0,
}

initialState.selectedDay = getTodayAbsoluteTime()


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
          .minuteStatistic[todayTime].workTime | 0

        newState.minuteStatistic[todayTime].workTime = todayMinutes + 1
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

      case EStatisticActionTypes.STATISTIC_ADD_PAUSE: {
        const newState = { ...state }
        const todayTime = getTodayAbsoluteTime()
        const todayPauses = newState
          .minuteStatistic[todayTime].countOfPauses | 0
        newState.minuteStatistic[todayTime].countOfPauses =
          todayPauses + 1
        return newState
      }

      case EStatisticActionTypes.STATISTIC_ADD_PAUSE_TIME: {
        const newState = { ...state }
        const todayTime = getTodayAbsoluteTime()
        const todayPauseTime = newState
          .minuteStatistic[todayTime].pauseTime | 0
        newState.minuteStatistic[todayTime].pauseTime =
          todayPauseTime + action.payload.secondsToAdd
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