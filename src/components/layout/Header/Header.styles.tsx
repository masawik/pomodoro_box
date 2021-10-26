import styled, { css } from 'styled-components'
import { StyledLink } from '../../typography'

export const StyledHeaderContainer = styled.div`
  height: 70px;
  box-shadow: 0 2px 40px 50px #f6f6f6;
`

export const StyledHeaderContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
  height: 100%;
  ${({ theme: { layoutWidth } }) => css`
    max-width: ${layoutWidth}px;
  `}
`

export const StyledStatistic = styled(StyledLink)`
  margin-left: auto;
`