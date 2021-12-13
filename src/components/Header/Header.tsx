import React from 'react'
import {
  HeaderWrapper,
  HeaderContainer, StatisticContainer, LogoContainer,
} from './Header.styles'
import { ReactComponent as TomatoSVG } from '../../assets/images/svg_icons/tomato.svg'
import { ReactComponent as StatisticSVG } from '../../assets/images/svg_icons/statistic.svg'
import { Link } from 'react-router-dom'
import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher'

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

        <ThemeSwitcher />

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