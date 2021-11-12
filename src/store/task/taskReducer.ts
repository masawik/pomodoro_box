import { Reducer } from 'redux'
import { ETaskActionTypes, TTaskActionTypes } from './taskTypes'
import { v4 as uuid } from 'uuid'

type TTaskStateItem = {
  count: number,
  name: string
}

type TTasksList = { [id: string]: TTaskStateItem }

interface ITaskState {
  tasks: TTasksList
}

const initialState: ITaskState = { tasks: {} }

export const taskReducer: Reducer<ITaskState, TTaskActionTypes> =
  (
    state = initialState,
    action
  ): ITaskState => {
    const { type } = action

    switch (type) {
      case ETaskActionTypes.TASK_ADD:
        return {
          ...state,
          tasks: {
            ...state.tasks,
            [uuid()]: {
              name: action.payload.name,
              count: 1,
            },
          },
        }

      case ETaskActionTypes.TASK_UPDATE:
        const { id, count, name } = action.payload
        return {
          ...state,
          tasks: {
            ...state.tasks,
            [id]: { count, name },
          },
        }

      case ETaskActionTypes.TASK_INCREASE_COUNT:
      case ETaskActionTypes.TASK_REDUCE_COUNT:
        const currentTask = state.tasks[action.payload.id]
        const prevCount = currentTask.count
        const newCount = prevCount +
          (type === ETaskActionTypes.TASK_INCREASE_COUNT ? 1 : -1)
        return {
          ...state,
          tasks: {
            ...state.tasks,
            [action.payload.id]: {
              ...currentTask,
              count: newCount
            },
          },
        }

      case ETaskActionTypes.TASK_DELETE:
        const newTasksState = { ...state.tasks }
        delete newTasksState[action.payload.id]
        return {
          ...state,
          tasks: newTasksState,
        }

      default:
        return state
    }
  }