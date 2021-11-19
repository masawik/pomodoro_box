import { combineReducers } from 'redux'
import { taskReducer } from './task/taskReducer'
import { settingsReducer } from './settings/settingsReducer'
import { timerReducer } from './timer/timerReducer'
import { statisticReducer } from './statistic/statisticReducer'

export const rootReducer = combineReducers({
  task: taskReducer,
  settings: settingsReducer,
  timer: timerReducer,
  statistic: statisticReducer
})

export type TRootState = ReturnType<typeof rootReducer>