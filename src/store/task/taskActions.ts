import {
  ETaskActionTypes,
  TTaskAdd,
  TTaskChangeName,
  TTaskChangeOrder,
  TTaskDelete,
  TTaskIncreaseCurrentPassedCount,
  TTaskIncreasePlannedCount,
  TTaskReducePlannedCount,
} from './taskTypes'

export const taskAdd = (name: string): TTaskAdd =>
  ({ type: ETaskActionTypes.TASK_ADD, payload: { name } })

export const taskDelete = (id: string): TTaskDelete =>
  ({ type: ETaskActionTypes.TASK_DELETE, payload: { id } })

export const taskIncreasePlannedCount =
  (id: string): TTaskIncreasePlannedCount =>
    ({ type: ETaskActionTypes.TASK_INCREASE_PLANNED_COUNT, payload: { id } })

export const taskReducePlannedCount = (id: string): TTaskReducePlannedCount =>
  ({ type: ETaskActionTypes.TASK_REDUCE_PLANNED_COUNT, payload: { id } })

export const taskChangeName = (id: string, name: string): TTaskChangeName =>
  ({ type: ETaskActionTypes.TASK_CHANGE_NAME, payload: { id, name } })

export const taskChangeOrder =
  (oldIndex: number, newIndex: number): TTaskChangeOrder =>
    ({
      type: ETaskActionTypes.TASK_CHANGE_ORDER,
      payload: { oldIndex, newIndex },
    })

export const taskIncreaseCurrentPassedCount =
  (): TTaskIncreaseCurrentPassedCount =>
    ({ type: ETaskActionTypes.TASK_INCREASE_CURRENT_PASSED_COUNT })