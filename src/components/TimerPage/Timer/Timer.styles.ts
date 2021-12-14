import styled, { css } from 'styled-components'
import { SButton } from '../../forms'
import { IColors } from '../../../theme/themeTypes'
import { SEmptyButton } from '../../forms/Button/Button.styles'

export const STimerContainer = styled.div`
  height: 507px;
  width: 733px;
  ${({ theme: { colors } }) => css`
    background-color: ${colors.secondary.light};
  `}
`

export interface IColorableComponent {
  color?: keyof IColors
}

export const STimerHeader = styled.div<IColorableComponent>`
  padding: 18px 40px;
  display: flex;
  justify-content: space-between;
  transition-property: background-color;
  ${({
       color = 'secondary',
       theme: {
         colors,
         invertedTextColor,
         transitionDuration,
       },
     }) => css`
    transition-duration: ${transitionDuration}ms;
    background-color: ${colors[color].normal};
    color: ${invertedTextColor};
  `}
`

export const STimerHeaderTaskName = styled.span`
  font-weight: bold;
`

export const STimerBody = styled.div`
  position: relative;
  display: flex;
  align-content: center;
  flex-direction: column;
  align-items: center;
  padding: 75px 0;
  height: 100%;
`

export const STimerDisplayContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 150px;
  font-weight: 200;
`

interface ISPlusBtnProps {
  disabled?: boolean
}

export const SPlusBtn = styled(SEmptyButton)<ISPlusBtnProps>`
  position: absolute;
  top: calc(50% - 25px);
  right: -82px;
  display: flex;
  

  &, svg {
    width: 62px;
  }

  ${({
       theme: { colors, transitionDuration },
       disabled = false,
     }) => css`
    svg circle {
      transition-duration: ${transitionDuration}ms;
      transition-property: fill;
      fill: ${colors.secondary.normal}
    }

    :hover {
      svg circle {
        fill: ${disabled ? colors.secondary.dark : colors.primary.dark}
      }
    }
  `}
`

export const SGearBtn = styled(SEmptyButton)`
  position: absolute;
  top: 10px;
  left: 5px;
  
  &, svg {
    width: 40px;
  }

  ${({
       theme: { colors, transitionDuration },
       disabled = false,
     }) => css`
    svg path {
      transition-duration: ${transitionDuration}ms;
      transition-property: fill;
      fill: ${colors.secondary.normal}
    }

    :hover {
      svg path {
        fill: ${disabled ? colors.secondary.dark : colors.focus.dark}
      }
    }
  `}
`

export const STimerDescriptionTaskCount = styled.span`
  color: ${({ theme: { colors } }) => colors.secondary.dark};
`

export const STimerControls = styled.div`
  margin-top: 32px;
`

export const STimerStartButton = styled(SButton)`
  margin-right: 25px;
`