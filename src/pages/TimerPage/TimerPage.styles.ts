import styled from 'styled-components'
import PageContentContainer
  from '../../components/layout/PageContentContainer/PageContentContainer.styles'

export const TimerPageContainer = styled(PageContentContainer)`
  display: flex;
`

export const LeftSide = styled.div`
  max-width: 528px;
  margin-right: 19px;
`

export const TaskListContainer = styled.div`
  max-width: 370px;
  
  ul {
    margin-top: 25px;
  }
`

