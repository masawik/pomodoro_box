import React from 'react'
import { STimerPageLeftSide, STimerPageTaskListContainer, STimerPageContainer } from './TimerPage.styles'
import NewTaskForm from '../../components/NewTaskForm/NewTaskForm'
import TaskList from '../../components/TaskList/TaskList'
import Instruction from '../../components/layout/Instruction/Instruction'
import Timer from '../../components/Timer/Timer'

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