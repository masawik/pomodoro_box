import React from 'react'
import PageContentContainer
  from '../../components/layout/PageContentContainer/PageContentContainer.styles'
import { LeftSide, TaskListContainer } from './TimerPage.styles'
import NewTaskForm from '../../components/NewTaskForm/NewTaskForm'
import TaskList from '../../components/TaskList/TaskList'
import Instruction from '../../components/layout/Instruction/Instruction'

const TimerPage = () => {
  return (
    <PageContentContainer>
      <LeftSide>

        <Instruction />
        <TaskListContainer>
          <NewTaskForm />
          <TaskList />
        </TaskListContainer>
      </LeftSide>
    </PageContentContainer>
  )
}

export default TimerPage