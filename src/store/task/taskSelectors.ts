import { TRootState } from '../rootReducer'

export const selectTaskState = (state: TRootState) => state.task

export const selectCurrentTaskId = (state: TRootState) => state.task.order[0]
export const selectCurrentTask =
  (state: TRootState) => state.task.tasks[state.task.order[0]]
