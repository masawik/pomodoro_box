import { Reducer } from 'redux'
import { ETaskActionTypes, TTaskActionTypes } from './taskTypes'
import { v4 as uuid } from 'uuid'

type TTaskStateItem = {
  count: number,
  name: string
}

export type TTasksList = { [id: string]: TTaskStateItem }

interface ITaskState {
  tasks: TTasksList,
  order: Array<string>
}

const initialState: ITaskState = { tasks: {}, order: [] }

export const taskReducer: Reducer<ITaskState, TTaskActionTypes> =
  (
    state = initialState,
    action
  ): ITaskState => {
    const { type } = action

    switch (type) {
      case ETaskActionTypes.TASK_ADD:
        const newTaskUuid = uuid()
        return {
          ...state,
          tasks: {
            ...state.tasks,
            [newTaskUuid]: {
              name: action.payload.name,
              count: 1,
            },
          },
          order: [...state.order, newTaskUuid],
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
              count: newCount,
            },
          },
        }

      case ETaskActionTypes.TASK_CHANGE_NAME:
        return {
          ...state,
          tasks: {
            ...state.tasks,
            [action.payload.id]: {
              ...state.tasks[action.payload.id],
              name: action.payload.name,
            },
          },
        }

      case ETaskActionTypes.TASK_DELETE:
        const newTasksState = { ...state.tasks }
        delete newTasksState[action.payload.id]
        return {
          ...state,
          tasks: newTasksState,
          order: [...state.order].filter(i => i !== action.payload.id),
        }

      case ETaskActionTypes.TASK_CHANGE_ORDER:
        const { oldIndex, newIndex } = action.payload
        const newOrder = [...state.order]
        const [replacingElement] = newOrder.splice(oldIndex, 1)
        newOrder.splice(newIndex, 0, replacingElement)
        return {
          ...state,
          order: newOrder,
        }

      default:
        return state
    }
  }