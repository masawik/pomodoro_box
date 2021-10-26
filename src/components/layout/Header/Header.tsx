import React from 'react'
import {
  StyledHeaderContainer,
  StyledHeaderContentContainer, StyledStatistic,
} from './Header.styles'
import { ReactComponent as TomatoSVG } from '../../../assets/images/tomato.svg'
import { ReactComponent as StatisticSVG } from '../../../assets/images/statistic.svg'
import { StyledLink } from '../../typography'

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