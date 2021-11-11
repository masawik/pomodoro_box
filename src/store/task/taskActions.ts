import { TASK_ADD, TASK_DELETE, TTaskAdd, TTaskDelete } from './taskTypes'

export const taskAdd = (name: string): TTaskAdd =>
  ({ type: TASK_ADD,payload: { name } })

export const taskDelete = (id: string): TTaskDelete =>
  ({ type: TASK_DELETE,payload: { id } })
