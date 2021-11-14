import React, { useState } from 'react'
import {
  STimerDisplayContainer,
  STimerContainer,
  STimerHeader,
  STimerHeaderTaskName,
  STimerBody,
  SPlusBtn,
  STimerDescriptionTaskCount, STimerStartButton, STimerControls, STimerTime,
} from './Timer.styles'
import { ReactComponent as FilledPlusSVG } from '../../../assets/images/circle_plus_filled.svg'
import { StyledButton } from '../../forms'
import { useSelector } from 'react-redux'
import { TRootState } from '../../../store/rootReducer'
import { useInterval } from '../../../hooks/useInterval'
import { addZero, splitSeconds } from '../../../utils/stringProcessing'
import { IColors } from '../../../utils/constants/themes.constants'

enum ETimerStates {
  STOPPED = 'STOPPED',
  STARTED = 'STARTED',
  PAUSED = 'PAUSED'
}

const Timer = () => {
  const currentTask = useSelector((state: TRootState) =>
    state.task.tasks[state.task.order[0]])
  const { pomodoro, timerSpeedRatio } =
    useSelector((state: TRootState) => state.settings)
  const [seconds, setSeconds] = useState(pomodoro)
  const [startTime, setStartTime] = useState(0)
  const [timerState, setTimerState] =
    useState<ETimerStates>(ETimerStates.STOPPED)

  //timer logic
  useInterval(() => {
      const delta = Math.floor((Date.now() - startTime)
        / (1000 / timerSpeedRatio))

      let newSecondsValue = pomodoro - delta
      newSecondsValue = newSecondsValue <= 0 ? 0 : newSecondsValue

      setSeconds(newSecondsValue)
      if (newSecondsValue === 0) onTimerEnd()
    },
    timerState === ETimerStates.STARTED ? 500 : null)

  const startTimer = () => {
    const newStartTime =
      timerState === ETimerStates.PAUSED ?
        Math.floor(Date.now()) - (pomodoro - seconds) * 1000
        : Date.now()

    setStartTime(newStartTime)
    setTimerState(ETimerStates.STARTED)
  }
  const pauseTimer = () => setTimerState(ETimerStates.PAUSED)
  const stopTimer = () => {
    setSeconds(pomodoro)
    setTimerState(ETimerStates.STOPPED)
  }

  const onTimerEnd = () => {
    console.log('finish')
    stopTimer()
  }

  const onDone = () => {
    stopTimer()
    console.log('done')
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

  const startButtonOnClick =
    timerState === ETimerStates.STOPPED
    || timerState === ETimerStates.PAUSED
      ? startTimer : pauseTimer
  const startButtonText =
    timerState === ETimerStates.STOPPED
    || timerState === ETimerStates.PAUSED
      ? 'Старт' : 'Пауза'

  const stopButtonOnClick =
    timerState === ETimerStates.PAUSED
      ? onDone
      : stopTimer
  const stopButtonText =
    timerState === ETimerStates.PAUSED
      ? 'Сделано'
      : 'Стоп'

  const headerColor: keyof IColors =
    timerState === ETimerStates.STARTED ? 'danger' : 'secondary'

  return (
    <STimerContainer>
      <STimerHeader
        color={headerColor}
      >
        <STimerHeaderTaskName>
          {taskName}
        </STimerHeaderTaskName>
        <span>
          {countOfPomodoros}
        </span>
      </STimerHeader>

      <STimerBody>
        <STimerDisplayContainer>
          <STimerTime
            color={timerState === ETimerStates.STARTED ? 'danger' : undefined}
          >
            {time}
          </STimerTime>
          {
            timerState === ETimerStates.STOPPED
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
            onClick={startButtonOnClick}
            disabled={!currentTask}
            transparent={!currentTask}
          >
            {startButtonText}
          </STimerStartButton>

          <StyledButton
            onClick={stopButtonOnClick}
            color='danger'
            disabled={timerState === ETimerStates.STOPPED}
            transparent
          >
            {stopButtonText}
          </StyledButton>
        </STimerControls>
      </STimerBody>
    </STimerContainer>
  )
}

export default Timer