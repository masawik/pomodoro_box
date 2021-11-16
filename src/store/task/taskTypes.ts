export enum ETaskActionTypes {
  TASK_ADD = 'TASK_ADD',
  TASK_DELETE = 'TASK_DELETE',
  TASK_INCREASE_PLANNED_COUNT = 'TASK_INCREASE_PLANNED_COUNT',
  TASK_REDUCE_PLANNED_COUNT = 'TASK_REDUCE_PLANNED_COUNT',
  TASK_CHANGE_NAME = 'TASK_CHANGE_NAME',
  TASK_CHANGE_ORDER = 'TASK_CHANGE_ORDER',
  TASK_INCREASE_CURRENT_PASSED_COUNT = 'TASK_INCREASE_CURRENT_PASSED_COUNT'
}

export type TTaskAdd =
  { type: ETaskActionTypes.TASK_ADD, payload: { name: string } }

export type TTaskDelete =
  { type: ETaskActionTypes.TASK_DELETE, payload: { id: string } }

export type TTaskIncreasePlannedCount =
  {
    type: ETaskActionTypes.TASK_INCREASE_PLANNED_COUNT,
    payload: { id: string }
  }

export type TTaskReducePlannedCount =
  { type: ETaskActionTypes.TASK_REDUCE_PLANNED_COUNT, payload: { id: string } }

export type TTaskChangeName =
  {
    type: ETaskActionTypes.TASK_CHANGE_NAME,
    payload: { id: string, name: string }
  }

export type TTaskChangeOrder =
  {
    type: ETaskActionTypes.TASK_CHANGE_ORDER,
    payload: { oldIndex: number, newIndex: number }
  }

export type TTaskIncreaseCurrentPassedCount =
  { type: ETaskActionTypes.TASK_INCREASE_CURRENT_PASSED_COUNT }

export type TTaskActionTypes = TTaskAdd
  | TTaskDelete
  | TTaskIncreasePlannedCount
  | TTaskReducePlannedCount
  | TTaskChangeName
  | TTaskChangeOrder
  | TTaskIncreaseCurrentPassedCount