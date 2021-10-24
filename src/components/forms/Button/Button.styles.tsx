import styled, {css} from 'styled-components'
import {IColors} from "../../../utils/constants/themes.constants";

interface StyledButtonProps {
  readonly color?: keyof IColors,
  readonly transparent?: boolean
}

export const Button = styled.button<StyledButtonProps>`
  padding: 19px 50px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  transition-duration: .3s;
  transition-property: background-color, color, border-color;
  
  ${({color = 'primary', theme: {colors}, transparent}) => css`
    background-color: ${colors[color].light};
    
    :hover {
      background-color: ${colors[color].main};
    }
    
    ${transparent && css`
      padding: 17px 48px;
      background-color: transparent;
      border: 2px solid ${colors[color].light};
      color: ${colors[color].light};
      
      :hover {
        border-color: transparent;
        color: #fff;
        background-color: ${colors[color].main};
      }
    `}
  `}
`