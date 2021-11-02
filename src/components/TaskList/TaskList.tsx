import React from 'react'
import TaskListItem from './TaskListItem/TaskListItem'
import { TaskListUl, TotalTimeSum } from './TaskList.styles'

const TaskList = () => {
  return (
    <div>
      <TaskListUl
        onClick={(e) => { // @ts-ignore
          window.t = e}}
      >
        <TaskListItem
          name='Тестовое название'
          count={1}
        />
        <TaskListItem
          name='Тестовое название 2'
          count={3}
        />
        <TaskListItem
          name='Тестовое название 3'
          count={10}
        />
      </TaskListUl>
      <TotalTimeSum>
        25 мин
      </TotalTimeSum>
    </div>
  )
}

export default TaskList