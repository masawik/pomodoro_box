import styled, {css} from 'styled-components'
import {COLORS} from "../../../utils/constants/themes.constants";

interface StyledButtonProps {
  readonly color?: keyof typeof COLORS,
  readonly transparent?: boolean
}

export const Button = styled.button<StyledButtonProps>`
  padding: 19px 50px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  background-color: ${({color}) => color ? COLORS[color].light : COLORS.primary.light};
  transition-duration: .3s;
  transition-property: background-color, color, border-color;
  :hover {
    background-color: ${({color}) => color ? COLORS[color].main : COLORS.primary.main};
  }
  
  ${({transparent, color}) => transparent && css`
    padding: 17px 48px;
    border: 2px solid ${color ? COLORS[color].main : COLORS.primary.main};
    color: ${color ? COLORS[color].main : COLORS.primary.main};
    background-color: transparent;
    :hover {
      border-color: transparent;
      color: #fff;
      background-color: ${color ? COLORS[color].main : COLORS.primary.main};
    }
  `}
`