import React from 'react'
import {
  HeaderWrapper,
  HeaderContainer, StatisticButton, LogoContainer,
} from './Header.styles'
import { ReactComponent as TomatoSVG } from '../../shared/assets/images/svg_icons/tomato.svg'
import { ReactComponent as StatisticSVG } from '../../shared/assets/images/svg_icons/statistic.svg'
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

        <StatisticButton
          as={Link}
          to={'/statistic'}
        >
          <StatisticSVG />
          Статистика
        </StatisticButton>
      </HeaderContainer>
    </HeaderWrapper>
  )
}

export default Header