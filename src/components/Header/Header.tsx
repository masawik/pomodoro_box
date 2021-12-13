import React from 'react'
import {
  HeaderWrapper,
  HeaderContainer, StatisticContainer, LogoContainer,
} from './Header.styles'
import { ReactComponent as TomatoSVG } from '../../assets/images/tomato.svg'
import { ReactComponent as StatisticSVG } from '../../assets/images/statistic.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <LogoContainer
          as={Link}
          to={'/'}
        >
          <TomatoSVG />
          pomodoro_box
        </LogoContainer>

        <StatisticContainer
          as={Link}
          to={'/statistic'}
        >
          <StatisticSVG />
          Статистика
        </StatisticContainer>
      </HeaderContainer>
    </HeaderWrapper>
  )
}

export default Header