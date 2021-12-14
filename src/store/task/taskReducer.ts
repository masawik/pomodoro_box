/* eslint-disable no-plusplus */
import { Reducer } from 'redux'
import { ETaskActionTypes, TTaskActionTypes } from './taskTypes'
import { v4 as uuid } from 'uuid'

type TTaskStateItem = {
  plannedCount: number,
  passedCount: number,
  index: number,
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
    const newState = { ...state }

    switch (action.type) {
      case ETaskActionTypes.TASK_ADD: {
        const newTaskUuid = uuid()
        const allCurrentTaskIndexes = [
          0,
          ...Object.keys(state.tasks)
            .map(i => state.tasks[i].index),
        ]
        const maxTaskIndex = Math.max(...allCurrentTaskIndexes)

        newState.tasks[newTaskUuid] = {
          name: action.payload.name,
          plannedCount: 1,
          passedCount: 0,
          index: maxTaskIndex + 1,
        }

        newState.order = [...newState.order, newTaskUuid]

        break
      }

      case ETaskActionTypes.TASK_INCREASE_PLANNED_COUNT:
      case ETaskActionTypes.TASK_REDUCE_PLANNED_COUNT: {
        const prevCount = newState.tasks[action.payload.id].plannedCount
        const newCount =
          action.type === ETaskActionTypes.TASK_INCREASE_PLANNED_COUNT
            ? prevCount + 1
            : prevCount - 1

        newState.tasks[action.payload.id].plannedCount = newCount
        break
      }

      case ETaskActionTypes.TASK_CHANGE_NAME:
        newState.tasks[action.payload.id].name = action.payload.name
        break

      case ETaskActionTypes.TASK_DELETE: {
        const taskIdToDelete = action.payload.id
        delete newState.tasks[taskIdToDelete]
        newState.order = newState.order.filter(i => i !== taskIdToDelete)
        break
      }

      case ETaskActionTypes.TASK_CHANGE_ORDER: {
        const { oldIndex, newIndex } = action.payload
        const [replacingElement] = newState.order.splice(oldIndex, 1)
        newState.order.splice(newIndex, 0, replacingElement)
        break
      }

      case ETaskActionTypes.TASK_INCREASE_CURRENT_PASSED_COUNT: {
        const currentTaskId = newState.order[0]
        newState.tasks[currentTaskId].plannedCount++
        newState.tasks[currentTaskId].passedCount++
        break
      }
    }

    return newState
  }