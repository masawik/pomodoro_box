import React, { useEffect } from 'react'
import {
  STimerPageLeftSide,
  STimerPageTaskListContainer,
  STimerPageContainer,
} from './TimerPage.styles'
import TaskList from './TaskList/TaskList'
import Instruction from './Instruction/Instruction'
import NewTaskForm from './NewTaskForm/NewTaskForm'
import { setDocumentTitle } from '../../../utils/documnet/document'
import { Timer } from '../../../widgets/Timer'

const TimerPage = () => {
  useEffect(() => {
    setDocumentTitle('pomodoro_box')
  }, [])

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