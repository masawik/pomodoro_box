import React from 'react'
import TaskListItem from './TaskListItem/TaskListItem'
import { STaskListUl, STaskListTotalTimeSum } from './TaskList.styles'
import { useSelector } from 'react-redux'
import { TRootState } from '../../../store/rootReducer'

const TaskList = () => {
  const tasks = useSelector((state: TRootState) => state.tasks)

  const $tasksList = Object.keys(tasks).map(id => {
    const { count, name } = tasks[id]
    return (
      <TaskListItem
        key={id}
        id={id}
        name={name}
        count={count}
      />
    )
  })

  return (
    <div>
      <STaskListUl
        onClick={(e) => { // @ts-ignore
          window.t = e
        }}
      >
        {$tasksList}
      </STaskListUl>
      <STaskListTotalTimeSum>
        25 мин
      </STaskListTotalTimeSum>
    </div>
  )
}

export default TaskList