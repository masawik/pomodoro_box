import { combineReducers } from 'redux'
import { taskReducer } from './task/taskReducer'
import { settingsReducer } from './settings/settingsReducer'

export const rootReducer = combineReducers({
  task: taskReducer,
  settings: settingsReducer
})

export type TRootState = ReturnType<typeof rootReducer>