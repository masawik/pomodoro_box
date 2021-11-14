import React from 'react'
import {
  STimerDisplayContainer,
  STimerContainer,
  STimerHeader,
  STimerHeaderTaskName,
  STimerBody,
  SPlusBtn,
  STimerDescriptionTaskCount, STimerStartButton, STimerControls,
} from './Timer.styles'
import { ReactComponent as FilledPlusSVG } from '../../../assets/images/circle_plus_filled.svg'
import { StyledButton } from '../../forms'
import { useSelector } from 'react-redux'
import { TRootState } from '../../../store/rootReducer'

const Timer = () => {
  const currentTask = useSelector((state: TRootState) =>
    state.task.tasks[state.task.order[0]]
  )

  return (
    <STimerContainer>
      <STimerHeader>
        <STimerHeaderTaskName>
          Тестовое название
        </STimerHeaderTaskName>

        <span>
          Помидор 1
        </span>
      </STimerHeader>

      <STimerBody>
        <STimerDisplayContainer>
          <span>
            25:00
          </span>

          <SPlusBtn>
            <FilledPlusSVG />
          </SPlusBtn>
        </STimerDisplayContainer>

        <div>
          <STimerDescriptionTaskCount>
            Задача 1 -
          </STimerDescriptionTaskCount>
          Тестовое название
        </div>

        <STimerControls>
          <STimerStartButton>
            Старт
          </STimerStartButton>

          <StyledButton color='secondary' transparent disabled>
            Стоп
          </StyledButton>
        </STimerControls>
      </STimerBody>
    </STimerContainer>
  )
}

export default Timer