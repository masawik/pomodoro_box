import React from 'react'
import { STaskListTotalTimeSum } from './TaskListTimeSum.styles'
import { TTasksList } from '../../../../store/task/taskReducer'
import { useSelector } from 'react-redux'
import { TRootState } from '../../../../store/rootReducer'
import { secondsToFormattedString } from '../../../../utils/date'

interface ISTaskListTotalTimeSumProps {
  tasks: TTasksList
}

const TaskListTimeSum: React.FC<ISTaskListTotalTimeSumProps> =
  ({ tasks }) => {
    const { pomodoro } =
      useSelector((state: TRootState) => state.settings)

    const totalSeconds = Object.keys(tasks)
        .map(id => tasks[id].plannedCount)
        .reduce((acc, cur) => acc + cur)
      * pomodoro

    const formattedSum = secondsToFormattedString(totalSeconds)

    return (
      <STaskListTotalTimeSum>
        {formattedSum}
      </STaskListTotalTimeSum>
    )
  }

export default TaskListTimeSum