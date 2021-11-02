import React from 'react'
import {
  TaskListLi,
  Count,
} from './TaskListItem.styles'
import TaskListItemMenu from './TaskListItemMenu/TaskListItemMenu'

export interface ItaskListItemProps {
  name: string,
  count: number
}

const TaskListItem = ({ count, name }: ItaskListItemProps) => {
  return (
    <TaskListLi>
      <Count>
        {count}
      </Count>
      {name}
      <TaskListItemMenu />
    </TaskListLi>
  )
}

export default TaskListItem