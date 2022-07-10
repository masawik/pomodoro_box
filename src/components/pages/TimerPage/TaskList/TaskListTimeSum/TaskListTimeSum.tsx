import React from 'react'
import { STaskListTotalTimeSum } from './TaskListTimeSum.styles'
import { TTasksList } from '../../../../../store/task/taskReducer'
import { useSelector } from 'react-redux'
import { msToFormattedString } from '../../../../../utils/dateAndTime'
import { selectSettings } from '../../../../../store/settings/settingsSelectors'

interface ISTaskListTotalTimeSumProps {
  tasks: TTasksList
}

const TaskListTimeSum: React.FC<ISTaskListTotalTimeSumProps> =
  ({ tasks }) => {
    const { onePomodoroTime } =
      useSelector(selectSettings)

    const totalSeconds = Object.keys(tasks)
        .map(id => tasks[id].plannedCount)
        .reduce((acc, cur) => acc + cur)
      * onePomodoroTime

    const formattedSum = msToFormattedString(totalSeconds)

    return (
      <STaskListTotalTimeSum>
        {formattedSum}
      </STaskListTotalTimeSum>
    )
  }

export default TaskListTimeSum