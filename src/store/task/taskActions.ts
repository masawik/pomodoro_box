import {
  ETaskActionTypes,
  TTaskAdd, TTaskChangeName,
  TTaskDelete,
  TTaskIncreaseCount, TTaskReduceCount,
  TTaskUpdate,
} from './taskTypes'

export const taskAdd = (name: string): TTaskAdd =>
  ({ type: ETaskActionTypes.TASK_ADD, payload: { name } })

export const taskDelete = (id: string): TTaskDelete =>
  ({ type: ETaskActionTypes.TASK_DELETE, payload: { id } })

export const taskUpdate = (
  id: string,
  name: string,
  count: number
): TTaskUpdate =>
  ({ type: ETaskActionTypes.TASK_UPDATE, payload: { id, name, count } })

export const taskIncreaseCount = (id: string): TTaskIncreaseCount =>
  ({ type: ETaskActionTypes.TASK_INCREASE_COUNT, payload: { id } })

export const taskReduceCount = (id: string): TTaskReduceCount =>
  ({ type: ETaskActionTypes.TASK_REDUCE_COUNT, payload: { id } })

export const taskChangeName = (id: string, name: string): TTaskChangeName =>
  ({ type: ETaskActionTypes.TASK_CHANGE_NAME, payload: { id, name } })