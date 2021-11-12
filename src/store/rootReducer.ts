import { combineReducers } from 'redux'
import { taskReducer } from './task/taskReducer'

export const rootReducer = combineReducers({
  task: taskReducer,
})

export type TRootState = ReturnType<typeof rootReducer>