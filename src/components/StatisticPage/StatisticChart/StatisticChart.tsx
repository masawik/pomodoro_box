import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts'
import {
  SChartBarRectangle,
  SResponsiveContainer, SXAxisTickText,
} from './StatisticChart.styles'
import {
  getDayOfWeekByTime,
  getTimeInDaysFromToday,
  getTodayAbsoluteTime,
  secondsToFormattedString,
} from '../../../utils/date'
import { useDispatch, useSelector } from 'react-redux'
import { TRootState } from '../../../store/rootReducer'
import { statisticSetSelectedDay } from '../../../store/statistic/statisticActions'

type TTimeInSeconds = number

interface IChartData {
  dayOfWeek: string,
  time: TTimeInSeconds,
  dayTime: number
}

interface IBarAndTickerGenericProps {
  activeBarIndex?: number
  index?: number
  clickHandler?: (barIndex: number) => void
}

interface IAxisCustomTickerProps extends IBarAndTickerGenericProps {
  x?: number
  y?: number
  payload?: {
    value: string
  }
}

interface ICustomBarShapeProps extends IBarAndTickerGenericProps {
  height?: number
}

const CustomXAxisTick = (props: IAxisCustomTickerProps) => {
  const {
    x,
    y,
    payload: { value } = { value: '' },
    activeBarIndex,
    index = 0,
    clickHandler = () => {
    },
  } = props

  const isActive = activeBarIndex === index

  return (
    <SXAxisTickText
      onClick={() => clickHandler(index)}
      x={x}
      y={y}
      dy={25}
      active={isActive}
    >
      {value}
    </SXAxisTickText>
  )
}

const CustomBarShape = (props: ICustomBarShapeProps) => {
  const {
    activeBarIndex,
    index = 0,
    height,
    clickHandler = () => {
    },
  } = props

  const isActive = activeBarIndex === index
  const isDisabled = !height
  const visibleHeight = isDisabled ? -5 : height

  return (
    <SChartBarRectangle
      {...props}
      onClick={() => clickHandler(index)}
      height={visibleHeight}
      disabled={isDisabled}
      active={isActive}
    />
  )
}

const CustomYAxisTick = (props: IAxisCustomTickerProps) => {
  const {
    x,
    y,
    payload: { value } = { value: '' },
  } = props

  const processedValue = value ? secondsToFormattedString(+value) : ''

  return (
    <text
      x={x}
      y={y}
      dx={25}
      textAnchor='left'>
      {processedValue}
    </text>
  )
}

const StatisticChart = () => {
  const dispatch = useDispatch()
  const { minuteStatistic, selectedDay } =
    useSelector((state: TRootState) => state.statistic)

  const today = getTodayAbsoluteTime()
  const firstDayOfCurrentWeek = getTimeInDaysFromToday(
    today,
    (new Date(today).getDay() - 1) * -1
  )
  const data: Array<IChartData> = new Array(7)
    .fill({})
    .map((i, index) => {
      const currentDayTime =
        getTimeInDaysFromToday(firstDayOfCurrentWeek, index)
      const countOfMinutes = minuteStatistic[currentDayTime]?.workTime | 0
      return {
        dayOfWeek: getDayOfWeekByTime(currentDayTime).short,
        time: countOfMinutes * 60,
        dayTime: currentDayTime,
      }
    })

  const barClickHandler = (barIndex: number) => {
    dispatch(statisticSetSelectedDay(data[barIndex].dayTime))
  }

  const activeBarIndex = data.findIndex(i => i.dayTime === selectedDay)
  return (
    <SResponsiveContainer height={''}>
      <BarChart
        data={data}
        margin={{ bottom: 20, right: 80, top: 80 }}
        barGap={32}
      >
        <CartesianGrid
          vertical={false}
        />
        <YAxis
          dataKey={'time'}
          orientation={'right'}
          tick={<CustomYAxisTick />}
          tickCount={5}
          axisLine={false}
          tickLine={false}
        />

        <XAxis
          dataKey={'dayOfWeek'}
          tick={
            <CustomXAxisTick
              clickHandler={barClickHandler}
              activeBarIndex={activeBarIndex}
            />
          }
          padding={{ left: 56, right: 56 }}
          axisLine={false}
          tickLine={false}
        />

        <Bar
          dataKey='time'
          shape={
            <CustomBarShape
              clickHandler={barClickHandler}
              activeBarIndex={activeBarIndex}
            />
          }
        />
      </BarChart>
    </SResponsiveContainer>
  )
}

export default StatisticChart