import React, { useState } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer, Rectangle, CartesianGrid,
} from 'recharts'
import styles from './StatisticChart.module.css'
import { secondsToHoursAndMinutesString } from '../../../utils/stringProcessing'

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
}

interface IAxisCustomTickerProps extends IBarAndTickerGenericProps {
  x?: number
  y?: number
  payload?: {
    value: string
  }
}

interface ICustomBarShapeProps extends IBarAndTickerGenericProps {
  clickHandler: (barIndex: number) => void
  height?: number
}

const CustomXAxisTick = (props: IAxisCustomTickerProps) => {
  const {
    x,
    y,
    payload: { value } = { value: '' },
    activeBarIndex,
    index,
  } = props

  const textClassnames = [styles.XAxisTick]
  if (activeBarIndex === index) textClassnames.push(styles.XAxisTick_active)

  return (
    <text
      className={textClassnames.join(' ')}
      x={x}
      y={y}
      dy={25}
      textAnchor='middle'>
      {value}
    </text>
  )
}

const CustomBarShape = (props: ICustomBarShapeProps) => {
  const rectangleClassnames = [styles.chartBarRectangle]
  const { activeBarIndex, index = 0 } = props

  if (activeBarIndex === index) {
    rectangleClassnames.push(styles.ChartBarRectangle_active)
  }

  let height = props.height
  if (!height) {
    rectangleClassnames.push(styles.ChartBarRectangle_disabled)
    height = -5
  }

  return (
    <Rectangle
      {...props}
      className={rectangleClassnames.join(' ')}
      onClick={() => props.clickHandler(index)}
      height={height}
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
    <ResponsiveContainer
      height={''}
      className={styles.container}
    >
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
          tick={<CustomXAxisTick activeBarIndex={activeBar} />}
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
    </ResponsiveContainer>
  )
}

export default StatisticChart