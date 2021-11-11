export const TASK_ADD = 'TASK_ADD'
export const TASK_DELETE = 'TASK_DELETE'
export const TASK_UPDATE = 'TASK_UPDATE'

export type TTaskAdd =
  { type: typeof TASK_ADD, payload: { name: string } }

export type TTaskDelete =
  { type: typeof TASK_DELETE, payload: { id: string } }

export type TTaskUpdate =
  {
    type: typeof TASK_UPDATE,
    payload: { id: string, name: string, count: number }
  }

export type TTaskActionTypes = TTaskAdd
  | TTaskDelete
  | TTaskUpdate