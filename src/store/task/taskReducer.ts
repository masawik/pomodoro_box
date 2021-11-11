import { Reducer } from 'redux'
import {
  TASK_ADD,
  TASK_DELETE,
  TASK_UPDATE,
  TTaskActionTypes,
} from './taskTypes'
import { v4 as uuid } from 'uuid'

type TTaskStateItem = {
  count: number,
  name: string
}

type TTaskState = { [id: string]: TTaskStateItem }

const initialState: TTaskState = {}

export const taskReducer: Reducer<TTaskState, TTaskActionTypes> =
  (
    state = initialState,
    action
  ): TTaskState => {
    switch (action.type) {
      case TASK_ADD:
        return {
          ...state,
          [uuid()]: {
            name: action.payload.name,
            count: 1,
          },
        }

      case TASK_UPDATE:
        const { id, count, name } = action.payload
        return {
          ...state,
          [id]: { name, count },
        }

      case TASK_DELETE:
        const newState = { ...state }
        delete newState[action.payload.id]
        return newState

      default:
        return state
    }
  }