import React, { useState } from 'react'
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
import { useInterval } from '../../../hooks/useInterval'
import { addZero, splitSeconds } from '../../../utils/stringProcessing'

//todo перенести в настройки таймера
const secondsInOnePomodoro = 25 * 60
const timerSpeedRatio = 300

const Timer = () => {
  const currentTask = useSelector((state: TRootState) =>
    state.task.tasks[state.task.order[0]]
  )

  const [seconds, setSeconds] = useState(secondsInOnePomodoro)
  const [isTimerStarted, setIsTimerStarted] = useState(false)
  const [startTime, setStartTime] = useState(0)

  useInterval(() => {
    const delta = Math.floor((Date.now() - startTime)
      / (1000 / timerSpeedRatio))
    const newSecondsValue = secondsInOnePomodoro - delta
    const newSeconds = newSecondsValue <= 0 ? 0 : newSecondsValue
    setSeconds(newSeconds)

    if (newSeconds === 0) onTimerEnd()
  }, isTimerStarted ? 500 : null)

  const onTimerStart = () => {
    setStartTime(Date.now())
    setIsTimerStarted(true)
  }

  const onTimerStop = () => {
    setIsTimerStarted(false)
  }

  const onTimerEnd = () => {
    setIsTimerStarted(false)
  }

  const splittedTime = splitSeconds(seconds)
  const time = `${splittedTime.minutes}:${addZero(splittedTime.seconds)}`

  let taskName = 'Задач пока нет'
  let countOfPomodoros = ''
  let description = (<>Задач пока нет</>)
  if (currentTask) {
    taskName = currentTask.name
    countOfPomodoros = `Помидор ${currentTask.passedCount + 1}`
    description = (
      <>
        <STimerDescriptionTaskCount>
          Задача {currentTask.index} -&nbsp;
        </STimerDescriptionTaskCount>
        {currentTask.name}
      </>
    )
  }
  return (
    <STimerContainer>
      <STimerHeader>
        <STimerHeaderTaskName>
          {taskName}
        </STimerHeaderTaskName>
        <span>
          {countOfPomodoros}
        </span>
      </STimerHeader>

      <STimerBody>
        <STimerDisplayContainer>
          <span>
            {time}
          </span>
          {
            !isTimerStarted
            &&
            (
              <SPlusBtn>
                <FilledPlusSVG />
              </SPlusBtn>
            )
          }

        </STimerDisplayContainer>

        <div>
          {description}
        </div>

        <STimerControls>
          <STimerStartButton
            onClick={onTimerStart}
            disabled={!currentTask}
            transparent={!currentTask}
          >
            Старт
          </STimerStartButton>

          <StyledButton
            onClick={onTimerStop}
            color='danger'
            disabled={!isTimerStarted}
            transparent
          >
            Стоп
          </StyledButton>
        </STimerControls>
      </STimerBody>
    </STimerContainer>
  )
}

export default Timer