import {
  TASK_ADD,
  TASK_DELETE,
  TASK_UPDATE,
  TTaskAdd,
  TTaskDelete,
  TTaskUpdate,
} from './taskTypes'

export const taskAdd = (name: string): TTaskAdd =>
  ({ type: TASK_ADD, payload: { name } })

export const taskDelete = (id: string): TTaskDelete =>
  ({ type: TASK_DELETE, payload: { id } })

export const taskUpdate = (
  id: string,
  name: string,
  count: number
): TTaskUpdate =>
  ({ type: TASK_UPDATE, payload: { id, name, count } })