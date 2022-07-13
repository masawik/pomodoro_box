import React, { ChangeEvent, useEffect } from 'react'
import SH1 from '../../typography/H1/H1.styles'
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
import { ReactComponent as FocusSVG } from '../../../assets/images/svg_icons/focus.svg'
import { ReactComponent as ClockSVG } from '../../../assets/images/svg_icons/clock.svg'
import { ReactComponent as StopSVG } from '../../../assets/images/svg_icons/stop.svg'
import StatisticChart from './StatisticChart/StatisticChart'
import { setDocumentTitle } from '../../../utils/documnet/document'
import { useDispatch, useSelector } from 'react-redux'
import {
  getDayOfWeekByTime,
  getDayTimeInDaysFromDayTime,
  getTodayAbsoluteTime,
  msToMin,
  splitMs,
} from '../../../utils/dateAndTime/dateAndTime'
import { statisticSetSelectedDay } from '../../../store/statistic/statisticActions'
import { selectSettings } from '../../../store/settings/settingsSelectors'
import { selectStatistic } from '../../../store/statistic/statisticSelectors'

const currentDayDataMock = {
  workTime: 0, countOfPomodoros: 0,
  countOfPauseMinutes: 0, pauseTime: 0,
}

const weekSelectorOptions = [
  { text: 'эта неделя', dayOffset: 0 },
  { text: 'прошедшая неделя', dayOffset: -7 },
  { text: '2 недели назад', dayOffset: -14 },
]

const StatisticPage = () => {
  useEffect(() => {
    setDocumentTitle('статистика')
    dispatch(statisticSetSelectedDay(getTodayAbsoluteTime()))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const dispatch = useDispatch()
  const { days, selectedDay } = useSelector(selectStatistic)
  const { onePomodoroTime } = useSelector(selectSettings)

  const currentDayData = days[selectedDay] || currentDayDataMock

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

  const $WeekSelectorOptions = weekSelectorOptions.map(i => (
    <option key={i.dayOffset} value={i.dayOffset}>{i.text}</option>
  ))

  return (
    <SStatisticPageContentContainer>
      <SStatisticPageHeader>
        <SH1>Ваша активность</SH1>

        <SStatisticPagePeriodSelector onChange={weekSelectorHandler}>
          {$WeekSelectorOptions}
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