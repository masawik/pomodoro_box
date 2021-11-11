export const TASK_ADD = 'TASK_ADD'
export const TASK_DELETE = 'TASK_DELETE'

export type TTaskAdd = {type: typeof TASK_ADD, payload: {name: string}}
export type TTaskDelete = {type: typeof TASK_DELETE, payload: {id: string}}

export type TTaskActionTypes = TTaskAdd
| TTaskDelete
