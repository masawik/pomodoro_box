import React from 'react'
import {
  STimerPageLeftSide,
  STimerPageTaskListContainer,
  STimerPageContainer,
} from './TimerPage.styles'
import TaskList from './TaskList/TaskList'
import Instruction from './Instruction/Instruction'
import Timer from './Timer/Timer'
import NewTaskForm from './NewTaskForm/NewTaskForm'

const TimerPage = () => {
  return (
    <STimerPageContainer>
      <STimerPageLeftSide>

        <Instruction />

        <STimerPageTaskListContainer>
          <NewTaskForm />
          <TaskList />
        </STimerPageTaskListContainer>
      </STimerPageLeftSide>

      <Timer />
    </STimerPageContainer>
  )
}

export default TimerPage