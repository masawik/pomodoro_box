import React from 'react'
import { STaskListTotalTimeSum } from './TaskListTimeSum.styles'
import { TTasksList } from '../../../../store/task/taskReducer'
import { secondsToFormattedString } from '../../../../utils/stringProcessing'


interface ISTaskListTotalTimeSumProps {
  tasks: TTasksList
}

//todo когда появятся настройки, брать значение оттуда
const secondsPerOnePomodoro = 1500

const TaskListTimeSum: React.FC<ISTaskListTotalTimeSumProps> =
  ({ tasks }) => {
    const totalSeconds = Object.keys(tasks)
        .map(id => tasks[id].count)
        .reduce((acc, cur) => acc + cur)
        * secondsPerOnePomodoro

    const formattedSum = secondsToFormattedString(totalSeconds)

    return (
      <STaskListTotalTimeSum>
        {formattedSum}
      </STaskListTotalTimeSum>
    )
  }

export default TaskListTimeSum