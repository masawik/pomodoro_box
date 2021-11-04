import React from 'react'
import { LeftSide, TaskListContainer, TimerPageContainer } from './TimerPage.styles'
import NewTaskForm from '../../components/NewTaskForm/NewTaskForm'
import TaskList from '../../components/TaskList/TaskList'
import Instruction from '../../components/layout/Instruction/Instruction'
import Timer from '../../components/Timer/Timer'

const TimerPage = () => {
  return (
    <TimerPageContainer>
      <LeftSide>

        <Instruction />

        <TaskListContainer>
          <NewTaskForm />
          <TaskList />
        </TaskListContainer>
      </LeftSide>

      <Timer />
    </TimerPageContainer>
  )
}

export default TimerPage