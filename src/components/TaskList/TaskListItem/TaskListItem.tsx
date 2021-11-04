import React from 'react'
import {
  STaskListLi,
  STaskListItemCount,
} from './TaskListItem.styles'
import TaskListItemMenu from './TaskListItemMenu/TaskListItemMenu'

export interface ItaskListItemProps {
  name: string,
  count: number
}

const TaskListItem = ({ count, name }: ItaskListItemProps) => {
  return (
    <STaskListLi>
      <STaskListItemCount>
        {count}
      </STaskListItemCount>
      {name}
      <TaskListItemMenu />
    </STaskListLi>
  )
}

export default TaskListItem