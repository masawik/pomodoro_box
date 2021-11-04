import React from 'react'
import {
  TimerDisplayContainer,
  TimerContainer,
  TimerHeader,
  TimerHeaderTaskName,
  TimerBody,
  PlusBtn,
  TimerDescriptionTaskCount, TimerStartButton, TimerControls,
} from './Timer.styles'
import { ReactComponent as FilledPlusSVG } from '../../assets/images/circle_plus_filled.svg'
import { StyledButton } from '../forms'

const Timer = () => {
  return (
    <TimerContainer>
      <TimerHeader>
        <TimerHeaderTaskName>
          Тестовое название
        </TimerHeaderTaskName>

        <span>
          Помидор 1
        </span>
      </TimerHeader>

      <TimerBody>
        <TimerDisplayContainer>
          <span>
            25:00
          </span>

          <PlusBtn>
            <FilledPlusSVG/>
          </PlusBtn>
        </TimerDisplayContainer>

        <div>
          <TimerDescriptionTaskCount>
            Задача 1 -
          </TimerDescriptionTaskCount>
          Тестовое название
        </div>

        <TimerControls>
          <TimerStartButton>
            Старт
          </TimerStartButton>

          <StyledButton color='secondary' transparent disabled>
            Стоп
          </StyledButton>
        </TimerControls>
      </TimerBody>
    </TimerContainer>
  )
}

export default Timer