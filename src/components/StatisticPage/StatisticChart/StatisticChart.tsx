import React, { useState } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts'
import { secondsToHoursAndMinutesString } from '../../../utils/stringProcessing'
import {
  SChartBarRectangle,
  SResponsiveContainer, SXAxisTickText,
} from './StatisticChart.styles'

const data = [
  { dayOfWeek: 'Пн', time: 51 * 60 },
  { dayOfWeek: 'Вт', time: 84 * 60 },
  { dayOfWeek: 'Ср', time: 50 * 60 },
  { dayOfWeek: 'Чт', time: 110 * 60 },
  { dayOfWeek: 'Пт', time: 46 * 60 },
  { dayOfWeek: 'Сб', time: 0 },
  { dayOfWeek: 'Вс', time: 0 },
]

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
    clickHandler = () => {}
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
    clickHandler = () => {}
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

  const processedValue = value ? secondsToHoursAndMinutesString(+value) : ''

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
  const [activeBar, setActiveBar] = useState<number>(0)
  const barClickHandler = (barIndex: number) => setActiveBar(barIndex)

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
              activeBarIndex={activeBar}
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
              activeBarIndex={activeBar}
            />
          }
        />
      </BarChart>
    </SResponsiveContainer>
  )
}

export default StatisticChart