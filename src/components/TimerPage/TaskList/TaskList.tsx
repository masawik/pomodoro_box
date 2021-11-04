import React from 'react'
import TaskListItem from './TaskListItem/TaskListItem'
import { STaskListUl, STaskListTotalTimeSum } from './TaskList.styles'

const TaskList = () => {
  return (
    <div>
      <STaskListUl
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
      </STaskListUl>
      <STaskListTotalTimeSum>
        25 мин
      </STaskListTotalTimeSum>
    </div>
  )
}

export default TaskList