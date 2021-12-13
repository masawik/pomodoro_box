import React, { ChangeEvent, useEffect } from 'react'
import SH1 from '../typography/H1/H1.styles'
import {
  SStatisticPagePeriodSelector,
  SStatisticPageHeader,
  SStatisticPageBody,
  SStatisticTilesRow,
  SWidgetColumnContainer,
  SWidgetColumnAndChart, SStatisticPageContentContainer,
} from './StatisticPage.styles'
import DayAndTotalTimeTile from './Tile/DayAndTotalTimeTile'
import PomodoroCountTile from './Tile/PomodoroCountTile'
import StatisticTile from './Tile/StatisticTile'
import { ReactComponent as FocusSVG } from '../../assets/images/focus.svg'
import { ReactComponent as ClockSVG } from '../../assets/images/clock.svg'
import { ReactComponent as StopSVG } from '../../assets/images/stop.svg'
import StatisticChart from './StatisticChart/StatisticChart'
import { setDocumentTitle } from '../../utils/document'
import { useDispatch, useSelector } from 'react-redux'
import { TRootState } from '../../store/rootReducer'
import {
  getDayOfWeekByTime,
  getDayTimeInDaysFromDayTime,
  getTodayAbsoluteTime,
  msToMin,
  splitMs,
} from '../../utils/dateAndTime'
import { statisticSetSelectedDay } from '../../store/statistic/statisticActions'
const StatisticPage = () => {
  useEffect(() => {
    setDocumentTitle('статистика')
  }, [])

  const dispatch = useDispatch()

  const { days, selectedDay } =
    useSelector((state: TRootState) => state.statistic)

  const { onePomodoroTime } =
    useSelector((state: TRootState) => state.settings)

  const currentDayData = days[selectedDay]
    || {
      workTime: 0, countOfPomodoros: 0,
      countOfPauseMinutes: 0, pauseTime: 0,
    }

  const {
    workTime, countOfPomodoros,
    pauseTime, countOfPauses,
  } = currentDayData

  const { long: dayOfWeek } = getDayOfWeekByTime(selectedDay)
  const focus = countOfPomodoros && workTime
    ? Math.floor(((countOfPomodoros * onePomodoroTime) / workTime) * 100)
    : 0

  const weekSelectorHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const weekOffset = Number(e.target.value) || 0
    const selectedWeek =
      getDayTimeInDaysFromDayTime(getTodayAbsoluteTime(), weekOffset)
    dispatch(statisticSetSelectedDay(selectedWeek))
  }

  //only render variables below
  const workTimeInMinutes = msToMin(workTime)

  const focusText = `${focus}%`
  const focusColor = focus === 0 ? 'secondary' : 'focus'

  let pauseTimeTileText = '0м'

  if (pauseTime !== 0) {
    const { minutes, hours, seconds } = splitMs(pauseTime)
    pauseTimeTileText = ''
    if (seconds) pauseTimeTileText = `${seconds}с`
    if (minutes) pauseTimeTileText = `${minutes}м ${pauseTimeTileText}`
    if (hours) pauseTimeTileText = `${hours}ч ${pauseTimeTileText}`
  }
  const pauseTileColor =
    pauseTime === 0 ? 'secondary' : 'info'

  const pauseCountTileText =
    !countOfPauses ? '0' : String(countOfPauses)

  const pauseCountTileColor =
    !countOfPauses ? 'secondary' : 'pauses'

  return (
    <SStatisticPageContentContainer>
      <SStatisticPageHeader>
        <SH1>
          Ваша активность
        </SH1>

        <SStatisticPagePeriodSelector
          onChange={weekSelectorHandler}
        >
          <option value={0}>эта неделя</option>
          <option value={-7}>прошедшая неделя</option>
          <option value={-14}>2 недели назад</option>
        </SStatisticPagePeriodSelector>
      </SStatisticPageHeader>

      <SStatisticPageBody>
        <SWidgetColumnAndChart>
          <SWidgetColumnContainer>
            <DayAndTotalTimeTile
              dayOfWeek={dayOfWeek}
              totalTime={workTimeInMinutes}
            />

            <PomodoroCountTile count={countOfPomodoros} />
          </SWidgetColumnContainer>

          <StatisticChart />
        </SWidgetColumnAndChart>


        <SStatisticTilesRow>
          <StatisticTile
            title='Фокус'
            text={focusText}
            color={focusColor}
            svg={(<FocusSVG />)}
          />

          <StatisticTile
            title='Время на паузе'
            text={pauseTimeTileText}
            color={pauseTileColor}
            svg={(<ClockSVG />)}
          />

          <StatisticTile
            title='Остановки'
            text={pauseCountTileText}
            color={pauseCountTileColor}
            svg={(<StopSVG />)}
          />
        </SStatisticTilesRow>
      </SStatisticPageBody>

    </SStatisticPageContentContainer>
  )
}

export default StatisticPage