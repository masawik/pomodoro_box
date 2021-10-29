import React from 'react'
import PageContentContainer
  from '../../components/layout/PageContentContainer/PageContentContainer.styles'
import {
  StyledLi,
  StyledUl,
} from '../../components/typography/List/List.styles'
import StyledH1 from '../../components/typography/H1/H1.styles'
import { LeftSide, TaskListContainer } from './TimerPage.styles'
import NewTaskForm from '../../components/NewTaskForm/NewTaskForm'
import TaskList from '../../components/TaskList/TaskList'


const InstructionListContent = [
  'Выберите категорию и напишите название текущей задачи',
  'Запустите таймер («помидор»)',
  'Работайте пока «помидор» не прозвонит',
  'Сделайте короткий перерыв (3-5 минут)',
  'Продолжайте работать «помидор» за «помидором», пока задача не будут ' +
  'выполнена. Каждые 4 «помидора» делайте длинный перерыв (15-30 минут).',
].map((li, index) => (
  <StyledLi key={`_${index}`}>{li}</StyledLi>
))


const TimerPage = () => {
  return (
    <PageContentContainer>
      <LeftSide>
        <StyledH1>Ура! Теперь можно начать работать:</StyledH1>
        <StyledUl
          style={{ 'marginTop': '16px' }}
        >
          {InstructionListContent}
        </StyledUl>

        <TaskListContainer>
          <NewTaskForm />
          <TaskList />
        </TaskListContainer>
      </LeftSide>
    </PageContentContainer>
  )
}

export default TimerPage