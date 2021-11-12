import React, { useState } from 'react'
import {
  STaskListLi,
  STaskListItemCount,
} from './TaskListItem.styles'
import TaskListItemMenu from './TaskListItemMenu/TaskListItemMenu'

export interface ITaskListItemProps {
  id: string,
  name: string,
  count: number
}

const TaskListItem = ({ count, name, id }: ITaskListItemProps) => {
  const [isEditModeOn, setIsEditModeOn] = useState(false)

  return (
    <STaskListLi>
      <STaskListItemCount>
        {count}
      </STaskListItemCount>
      {
        isEditModeOn ?
          (
            <input type='text' value={name} />
          )
          :
          name
      }

      <TaskListItemMenu
        id={id}
        currentTaskPomodoroCount={count}
      />
    </STaskListLi>
  )
}

export default TaskListItem