import React from 'react'
import PageContentContainer from '../layout/PageContentContainer/PageContentContainer.styles'
import SH1 from '../typography/H1/H1.styles'
import { SStatisticPagePeriodSelector, SStatisticPageHeader } from './StatisticPage.styles'

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


    </PageContentContainer>
  )
}

export default StatisticPage