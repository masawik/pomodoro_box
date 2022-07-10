import styled from 'styled-components'
import { SSelect } from '../../forms'
import PageContentContainer
  from '../../layout/PageContentContainer/PageContentContainer.styles'

export const SStatisticPageContentContainer = styled(PageContentContainer)`
  margin-top: 50px;
`

export const SStatisticPagePeriodSelector = styled(SSelect)`
  width: 370px;
  color: ${({ theme: { textColor } }) => textColor}
`

export const SStatisticPageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`

export const SStatisticPageBody = styled.div`
  display: flex;
  flex-direction: column;
`

export const SStatisticTilesRow = styled.div`
  display: flex;
`

export const SWidgetColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const SWidgetColumnAndChart = styled.div`
  display: flex;
  margin-bottom: 32px;
`