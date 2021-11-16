import React, { useEffect, useState } from 'react'
import {
  SPlusBtn,
  STimerBody,
  STimerContainer,
  STimerControls,
  STimerDescriptionTaskCount,
  STimerDisplayContainer,
  STimerHeader,
  STimerHeaderTaskName,
  STimerStartButton,
  STimerTime,
} from './Timer.styles'
import { ReactComponent as FilledPlusSVG } from '../../../assets/images/circle_plus_filled.svg'
import { StyledButton } from '../../forms'
import { useDispatch, useSelector } from 'react-redux'
import { TRootState } from '../../../store/rootReducer'
import { useInterval } from '../../../hooks/useInterval'
import { addZero, splitSeconds } from '../../../utils/stringProcessing'
import { IColors } from '../../../utils/constants/themes.constants'
import {
  timerIncreaseWorkCycles,
  timerSetBreakMode,
  timerSetWorkMode,
} from '../../../store/timer/timerActions'
import { ETimerModes } from '../../../store/timer/timerReducer'

enum ETimerStates {
  STOPPED = 'STOPPED',
  STARTED = 'STARTED',
  PAUSED = 'PAUSED'
}


const Timer = () => {
  const dispatch = useDispatch()

  const currentTask = useSelector((state: TRootState) =>
    state.task.tasks[state.task.order[0]])

  const {
    pomodoro, timerSpeedRatio,
    shortBreak, longBreak, longBreakInterval,
  } =
    useSelector((state: TRootState) => state.settings)

  const { workCycles, mode } = useSelector((state: TRootState) =>
    state.timer)

  const [currentDuration, setCurrentDuration] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [startTime, setStartTime] = useState(0)
  const [timerState, setTimerState] =
    useState<ETimerStates>(ETimerStates.STOPPED)


  //timer logic
  useInterval(() => {
      const delta = Math.floor((Date.now() - startTime)
        / (1000 / timerSpeedRatio))

      let newSecondsValue = currentDuration - delta
      newSecondsValue = newSecondsValue <= 0 ? 0 : newSecondsValue

      setSeconds(newSecondsValue)
      if (newSecondsValue === 0) onTimerEnd()
    },
    timerState === ETimerStates.STARTED ? 500 : null)

  const startTimer = () => {
    const newStartTime =
      timerState === ETimerStates.PAUSED ?
        Math.floor(Date.now()) - (currentDuration - seconds) * 1000
        : Date.now()

    setStartTime(newStartTime)
    setTimerState(ETimerStates.STARTED)
  }

  const pauseTimer = () => setTimerState(ETimerStates.PAUSED)

  const stopTimer = () => {
    setSeconds(currentDuration)
    setTimerState(ETimerStates.STOPPED)
  }

  const onForceDoneClick = () => {
    stopTimer()
    console.log('done')
  }

  const setUpBreak = () => {
    const breakDuration = workCycles !== 0
    && workCycles % longBreakInterval === 0
      ? longBreak
      : shortBreak
    console.log(`workCycles: ${workCycles} | breakDuration: ${breakDuration}`)
    setCurrentDuration(breakDuration)
    setSeconds(breakDuration)
    dispatch(timerSetBreakMode())
  }

  const setUpWork = () => {
    setCurrentDuration(pomodoro)
    setSeconds(pomodoro)
    dispatch(timerSetWorkMode())
  }

  const onTimerEnd = () => {
    stopTimer()
    if (mode === ETimerModes.WORK) {
      dispatch(timerIncreaseWorkCycles())
      setUpBreak()
    } else setUpWork()
  }

  useEffect(() => {
    mode === ETimerModes.WORK ? setUpWork() : setUpBreak()
  }, [])

  //below only render variables
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
      ? onForceDoneClick
      : stopTimer
  const stopButtonText =
    timerState === ETimerStates.PAUSED
      ? 'Сделано'
      : 'Стоп'

  const headerColor: keyof IColors =
    timerState === ETimerStates.STOPPED
      ? 'secondary'
      : mode === ETimerModes.WORK
        ? 'danger'
        : 'primary'

  const timeColor: keyof IColors =
    mode === ETimerModes.WORK
      ? 'danger'
      : 'primary'

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
            color={timerState === ETimerStates.STARTED ? timeColor : undefined}
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