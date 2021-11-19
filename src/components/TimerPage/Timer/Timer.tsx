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
import { addZero } from '../../../utils/stringProcessing'
import { IColors } from '../../../utils/constants/themes.constants'
import {
  timerIncreaseWorkCycles,
  timerSetBreakMode,
  timerSetWorkMode,
} from '../../../store/timer/timerActions'
import { ETimerModes } from '../../../store/timer/timerReducer'
import {
  taskDelete,
  taskIncreaseCurrentPassedCount,
} from '../../../store/task/taskActions'
import { splitMs } from '../../../utils/dateAndTime'
import {
  statisticAddMinute, statisticAddPause,
  statisticAddPauseTime,
  statisticAddPomodoro,
} from '../../../store/statistic/statisticActions'

enum ETimerStates {
  STOPPED = 'STOPPED',
  STARTED = 'STARTED',
  PAUSED = 'PAUSED'
}

const SEC_IN_ONE_MINUTE = 60
const MS_IN_ONE_SECOND = 1000

const Timer = () => {
  const dispatch = useDispatch()

  const currentTaskId =
    useSelector((state: TRootState) => state.task.order[0])
  const currentTask =
    useSelector((state: TRootState) => state.task.tasks[currentTaskId])

  const {
    onePomodoroTime,
    timerSpeedRatio,
    shortBreakTime,
    longBreakTime,
    longBreakInterval,
  } = useSelector((state: TRootState) => state.settings)

  const { workCycles, mode: timerMode } =
    useSelector((state: TRootState) => state.timer)

  const [currentDuration, setCurrentDuration] = useState(0)
  const [timerValue, setTimerValue] = useState(0)
  const [startTimerTime, setStartTimerTime] = useState(0)
  const [startPauseTime, setStartPauseTime] = useState(0)

  const [timerState, setTimerState] =
    useState<ETimerStates>(ETimerStates.STOPPED)


  //timer logic
  useInterval(() => {
      const delta =
        Math.floor(((Date.now() - startTimerTime) / MS_IN_ONE_SECOND)
          * MS_IN_ONE_SECOND * timerSpeedRatio)

      let newTimerValue = currentDuration - delta
      newTimerValue = newTimerValue <= 0 ? 0 : newTimerValue

      setTimerValue(newTimerValue)
      if (newTimerValue === 0) onTimerEnd()
    },
    timerState === ETimerStates.STARTED ? (500 / timerSpeedRatio) : null)

  const startTimer = () => {
    let newTimerStartTime: number
    if (timerState === ETimerStates.PAUSED) {
      newTimerStartTime =
        Date.now() - (currentDuration - timerValue)

      const pauseTime = Date.now() - startPauseTime
      dispatch(statisticAddPauseTime(pauseTime))
    } else {
      newTimerStartTime = Date.now()
    }

    setStartTimerTime(newTimerStartTime)
    setTimerState(ETimerStates.STARTED)
  }

  const pauseTimer = () => {
    setStartPauseTime(Date.now())
    setTimerState(ETimerStates.PAUSED)

    timerMode === ETimerModes.WORK && dispatch(statisticAddPause())
  }

  const stopTimer = () => {
    setTimerValue(currentDuration)
    setTimerState(ETimerStates.STOPPED)
  }

  const onForceDoneClick = () => onTimerEnd()

  const setUpBreak = () => {
    const breakDuration =
      workCycles !== 0 && workCycles % longBreakInterval === 0
        ? longBreakTime
        : shortBreakTime
    setCurrentDuration(breakDuration)
    setTimerValue(breakDuration)
    dispatch(timerSetBreakMode())
  }

  const setUpWork = () => {
    setCurrentDuration(onePomodoroTime)
    setTimerValue(onePomodoroTime)
    dispatch(timerSetWorkMode())
  }

  const onTaskFinish = () => {
    //todo тут добавить ненавязчивую поздравлялку
    dispatch(taskDelete(currentTaskId))
  }

  const onTimerEnd = () => {
    stopTimer()
    if (timerMode === ETimerModes.WORK) {
      dispatch(timerIncreaseWorkCycles())

      dispatch(statisticAddPomodoro())

      if (currentTask.plannedCount === 1) onTaskFinish()
      else dispatch(taskIncreaseCurrentPassedCount())

      setUpBreak()
    } else setUpWork()
  }

  useEffect(() => {
    timerMode === ETimerModes.WORK ? setUpWork() : setUpBreak()
  }, [])

  useEffect(() => {
    timerMode === ETimerModes.WORK
    && timerState === ETimerStates.STARTED
    && Math.floor(timerValue / MS_IN_ONE_SECOND) % SEC_IN_ONE_MINUTE === 0
    && dispatch(statisticAddMinute())
  }, [Math.floor(timerValue / MS_IN_ONE_SECOND)])

  //below only render variables
  const splittedTime = splitMs(timerValue)
  const time = `${splittedTime.minutes}:${addZero(splittedTime.seconds)}`

  let taskName = 'Задач пока нет'
  let countOfPomodoros = ''
  let description = (<>Задач пока нет</>)
  if (currentTask) {
    taskName = currentTask.name
    countOfPomodoros = timerMode === ETimerModes.WORK
      ? `Помидор ${currentTask.passedCount + 1}`
      : `Перерыв ${currentTask.passedCount}`

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
      ? timerMode === ETimerModes.WORK
        ? 'Сделано'
        : 'Пропустить'
      : 'Стоп'

  const headerColor: keyof IColors =
    timerState === ETimerStates.STOPPED
      ? 'secondary'
      : timerMode === ETimerModes.WORK
        ? 'danger'
        : 'primary'

  const timeColor: keyof IColors =
    timerMode === ETimerModes.WORK
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