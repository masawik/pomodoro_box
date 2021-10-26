import React from 'react'
import {
  StyledHeaderContainer,
  StyledHeaderContentContainer,
} from './Header.styles'
import { ReactComponent as TomatoSVG } from '../../../assets/images/tomato.svg'
import { StyledLink } from '../../typography/Link/Link.styles'
import { ReactComponent as StatisticSVG } from '../../../assets/images/statistic.svg'
import styled from 'styled-components'

const StyledStatistic = styled(StyledLink)`
  margin-left: auto;
`

const Header = () => {
  return (
    <StyledHeaderContainer>
      <StyledHeaderContentContainer>
        <StyledLink href='#'>
          <TomatoSVG />
          pomodoro_box
        </StyledLink>


        <StyledStatistic
          hoverPaintItem={{ selector: 'svg path', property: 'fill' }}
          href='#'
        >
          <StatisticSVG />
          Статистика
        </StyledStatistic>
      </StyledHeaderContentContainer>
    </StyledHeaderContainer>
  )
}

export default Header