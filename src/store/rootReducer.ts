import { combineReducers } from 'redux'
import { taskReducer } from './task/taskReducer'
import { settingsReducer } from './settings/settingsReducer'
import { timerReducer } from './timer/timerReducer'

export const rootReducer = combineReducers({
  task: taskReducer,
  settings: settingsReducer,
  timer: timerReducer
})

export type TRootState = ReturnType<typeof rootReducer>