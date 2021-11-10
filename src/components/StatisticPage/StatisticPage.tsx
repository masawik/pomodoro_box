import React from 'react'
import PageContentContainer
  from '../layout/PageContentContainer/PageContentContainer.styles'
import SH1 from '../typography/H1/H1.styles'
import {
  SStatisticPagePeriodSelector,
  SStatisticPageHeader,
  SStatisticPageBody,
  SStatisticTilesRow,
  SWidgetColumnContainer,
  SWidgetColumnAndChart,
} from './StatisticPage.styles'
import DayAndTotalTimeTile from './Tile/DayAndTotalTimeTile'
import PomodoroCountTile from './Tile/PomodoroCountTile'
import StatisticTile from './Tile/StatisticTile'
import { ReactComponent as FocusSVG } from '../../assets/images/focus.svg'
import { ReactComponent as ClockSVG } from '../../assets/images/clock.svg'
import { ReactComponent as StopSVG } from '../../assets/images/stop.svg'
import StatisticChart from './StatisticChart/StatisticChart'


const StatisticPage = () => {
  return (
    <PageContentContainer>
      <SStatisticPageHeader>
        <SH1>
          Ваша активность
        </SH1>

        <SStatisticPagePeriodSelector name='' id=''>
          <option value=''>эта неделя</option>
          <option value=''>прошедшая неделя</option>
          <option value=''>2 недели назад</option>
        </SStatisticPagePeriodSelector>
      </SStatisticPageHeader>

      <SStatisticPageBody>
        <SWidgetColumnAndChart>
          <SWidgetColumnContainer>
            <DayAndTotalTimeTile
              dayOfWeek='Суббота'
              totalTime={51}
            />

            <PomodoroCountTile count={2}/>
          </SWidgetColumnContainer>

          <StatisticChart />
        </SWidgetColumnAndChart>


        <SStatisticTilesRow>
          <StatisticTile
            title='Фокус'
            text='35%'
            color={'focus'}
            svg={(<FocusSVG />)}
          />

          <StatisticTile
            title='Время на паузе'
            text='9м'
            color={'info'}
            svg={(<ClockSVG />)}
          />

          <StatisticTile
            title='Остановки'
            text='3'
            color={'pauses'}
            svg={(<StopSVG />)}
          />
        </SStatisticTilesRow>
      </SStatisticPageBody>

    </PageContentContainer>
  )
}

export default StatisticPage