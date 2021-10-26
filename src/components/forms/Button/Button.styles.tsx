import styled, { css } from 'styled-components'
import { IColors } from '../../../utils/constants/themes.constants'

interface StyledButtonProps {
  readonly color?: keyof IColors,
  readonly transparent?: boolean
}

export const StyledButton = styled.button<StyledButtonProps>`
  padding: 19px 50px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  transition-property: background-color, color, border-color;

  ${({ color = 'primary', theme: { colors, fontColor , transitionDuration } }) => css`
    transition-duration: ${transitionDuration}ms;
    color: ${fontColor};
    background-color: ${colors[color].normal};

    :hover {
      background-color: ${colors[color].dark};
    }
  `}

  ${({ color = 'primary', theme: { colors, fontColor }, transparent }) => transparent && css`
    padding: 17px 48px;
    background-color: transparent;
    border: 2px solid ${colors[color].normal};
    color: ${colors[color].normal};

    :hover {
      border-color: transparent;
      color: ${fontColor};
      background-color: ${colors[color].dark};
    }
  `}
`