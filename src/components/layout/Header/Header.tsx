import React from 'react'
import {
  HeaderWrapper,
  HeaderContainer, StatisticContainer, LogoContainer,
} from './Header.styles'
import { ReactComponent as TomatoSVG } from '../../../assets/images/tomato.svg'
import { ReactComponent as StatisticSVG } from '../../../assets/images/statistic.svg'

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <LogoContainer href='#'>
          <TomatoSVG />
          pomodoro_box
        </LogoContainer>

        <StatisticContainer
          hoverPaintItem={{ selector: 'svg path', property: 'fill' }}
          href='#'
        >
          <StatisticSVG />
          Статистика
        </StatisticContainer>
      </HeaderContainer>
    </HeaderWrapper>
  )
}

export default Header