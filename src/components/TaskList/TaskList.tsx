import React from 'react'
import TaskListItem from './TaskListItem/TaskListItem'
import { StyledUl } from './TaskList.styles'

const TaskList = () => {
  return (
    <div>
      <StyledUl>
        <TaskListItem
          name='Тестовое название'
          count={1}
        />
      </StyledUl>
    </div>
  )
}

export default TaskList