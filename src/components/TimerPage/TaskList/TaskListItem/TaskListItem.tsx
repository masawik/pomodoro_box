import React from 'react'
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
  return (
    <STaskListLi>
      <STaskListItemCount>
        {count}
      </STaskListItemCount>
      {name}
      <TaskListItemMenu id={id} />
    </STaskListLi>
  )
}

export default TaskListItem