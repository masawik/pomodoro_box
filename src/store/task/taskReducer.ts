import { Reducer } from 'redux'
import { TASK_ADD, TASK_DELETE, TTaskActionTypes } from './taskTypes'
import { v4 as uuid } from 'uuid'

type TTaskState = Array<{
  id: string,
  count: number,
  name: string
}>

const initialState: TTaskState = []

export const taskReducer: Reducer<TTaskState, TTaskActionTypes> =
  (
    state = initialState,
   action
  ): TTaskState => {
  switch (action.type) {
    case TASK_ADD:
      return [...state, { ...action.payload, count: 1, id: uuid() }]
    case TASK_DELETE:
      return state.filter(task => task.id !== action.payload.id)
    default:
      return state
  }
}