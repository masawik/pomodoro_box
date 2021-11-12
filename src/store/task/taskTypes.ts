export enum ETaskActionTypes {
  TASK_ADD,
  TASK_DELETE,
  TASK_UPDATE,
  TASK_INCREASE_COUNT,
  TASK_REDUCE_COUNT,
  TASK_CHANGE_NAME
}

export type TTaskAdd =
  { type: ETaskActionTypes.TASK_ADD, payload: { name: string } }

export type TTaskDelete =
  { type: ETaskActionTypes.TASK_DELETE, payload: { id: string } }

export type TTaskUpdate =
  {
    type: ETaskActionTypes.TASK_UPDATE,
    payload: { id: string, name: string, count: number }
  }

export type TTaskIncreaseCount =
  { type: ETaskActionTypes.TASK_INCREASE_COUNT, payload: { id: string } }

export type TTaskReduceCount =
  { type: ETaskActionTypes.TASK_REDUCE_COUNT, payload: { id: string } }

export type TTaskChangeName =
  {
    type: ETaskActionTypes.TASK_CHANGE_NAME,
    payload: { id: string, name: string }
  }

export type TTaskActionTypes = TTaskAdd
  | TTaskDelete
  | TTaskUpdate
  | TTaskIncreaseCount
  | TTaskReduceCount
  | TTaskChangeName