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
} from './Timer.styles'
import { ReactComponent as FilledPlusSVG } from '../../../assets/images/svg_icons/circle_plus_filled.svg'
import { SButton } from '../../forms'
import { useDispatch, useSelector } from 'react-redux'
import { TRootState } from '../../../store/rootReducer'
import { useInterval } from '../../../hooks/useInterval'
import {
  timerIncreaseWorkCycles,
  timerSetBreakMode,
  timerSetWorkMode,
} from '../../../store/timer/timerActions'
import { ETimerModes } from '../../../store/timer/timerReducer'
import {
  taskIncreaseCurrentPassedCount,
  taskIncreasePlannedCount,
} from '../../../store/task/taskActions'
import {
  statisticAddMinute,
  statisticAddPause,
  statisticAddPauseTime,
  statisticAddPomodoro,
} from '../../../store/statistic/statisticActions'
import Watchface from './Watchface/Watchface'
import { IColors } from '../../../theme/themeTypes'
import TimerFinishNotification
  from './TimerFinishNotification/TimerFinishNotification'
import TimerSettings from './TimerSettings/TimerSettings'

enum ETimerStates {
  STOPPED = 'STOPPED',
  STARTED = 'STARTED',
  PAUSED = 'PAUSED'
}

const TIMER_VALUE_UPDATE_INTERVAL_MS = 500
const SEC_IN_ONE_MINUTE = 60
const MS_IN_ONE_SECOND = 1000

const Timer = () => {
  const dispatch = useDispatch()

  //timer finish notification
  const [
    isTimerFinishNotificationVisible, setIsTimerFinishNotificationVisible,
  ] = useState(false)

  //task
  const currentTaskId =
    useSelector((state: TRootState) => state.task.order[0])

  const currentTask =
    useSelector((state: TRootState) => state.task.tasks[currentTaskId])


  // settings
  const {
    onePomodoroTime,
    timerSpeedRatio,
    shortBreakTime,
    longBreakTime,
    longBreakInterval,
    timerEndNotificationEnabled,
  } = useSelector((state: TRootState) => state.settings)


  //timer state
  const { workCycles, mode: timerMode } =
    useSelector((state: TRootState) => state.timer)

  const [currentDuration, setCurrentDuration] = useState(0)

  const initialTimerValue =
    timerMode === ETimerModes.WORK
      ? onePomodoroTime
      : workCycles !== 0 && workCycles % longBreakInterval === 0
        ? longBreakTime
        : shortBreakTime
  const [timerValue, setTimerValue] = useState(initialTimerValue)

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
    timerState === ETimerStates.STARTED
      ? (TIMER_VALUE_UPDATE_INTERVAL_MS / timerSpeedRatio) : null)

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

  useEffect(() => {
    timerMode === ETimerModes.WORK ? setUpWork() : setUpBreak()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const currentTimerValueInSeconds = Math.floor(timerValue / MS_IN_ONE_SECOND)
  useEffect(() => {
    timerMode === ETimerModes.WORK
    && timerState === ETimerStates.STARTED
    && Math.floor(timerValue / MS_IN_ONE_SECOND) % SEC_IN_ONE_MINUTE === 0
    && dispatch(statisticAddMinute())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTimerValueInSeconds])


  //timer handlers
  const startTimer = () => {
    let newTimerStartTime: number
    if (timerState === ETimerStates.PAUSED) {
      newTimerStartTime =
        Date.now() - (currentDuration - timerValue)

      if (timerMode === ETimerModes.WORK) {
        const pauseTime = Date.now() - startPauseTime
        dispatch(statisticAddPauseTime(pauseTime))
      }
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

  const onTimerEnd = (isForced: boolean = false) => {
    stopTimer()
    if (timerMode === ETimerModes.WORK) {
      dispatch(timerIncreaseWorkCycles())
      dispatch(statisticAddPomodoro())
      dispatch(taskIncreaseCurrentPassedCount())
      setUpBreak()
    } else setUpWork()
    timerEndNotificationEnabled
    && !isForced
    && setIsTimerFinishNotificationVisible(true)
  }

  const onForceDoneClick = () => onTimerEnd(true)

  const increaseCurrentTaskPlannedPomodoroCount =
    () => dispatch(taskIncreasePlannedCount(currentTaskId))


  //notification functions
  const closeFinishNotification =
    () => setIsTimerFinishNotificationVisible(false)

  //below only render variables
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
      ? 'Старт'
      : timerState === ETimerStates.PAUSED
        ? 'Продолжить'
        : 'Пауза'

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
    <>
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
            <Watchface
              color={
                timerState === ETimerStates.STARTED
                  ? timeColor
                  : undefined
              }
              time={timerValue}
            />
            {
              timerState === ETimerStates.STOPPED
              &&
              (
                <SPlusBtn
                  disabled={!currentTaskId}
                  onClick={increaseCurrentTaskPlannedPomodoroCount}
                >
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

            <SButton
              onClick={stopButtonOnClick}
              color='danger'
              disabled={timerState === ETimerStates.STOPPED}
              transparent
            >
              {stopButtonText}
            </SButton>
          </STimerControls>
        </STimerBody>
      </STimerContainer>

      <TimerFinishNotification
        isVisible={isTimerFinishNotificationVisible}
        onClose={closeFinishNotification}
        timerMode={timerMode}
      />

      <TimerSettings/>
    </>
  )
}

export default Timer