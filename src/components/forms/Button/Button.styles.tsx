import styled, {css, IColors} from 'styled-components'

interface StyledButtonProps {
  readonly color?: keyof IColors,
  readonly transparent?: boolean
}

export const Button = styled.button<StyledButtonProps>`
  padding: 19px 50px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  transition-duration: .3s;
  transition-property: background-color, color, border-color;
  
  ${({color = 'primary', theme: {colors, fontColor}}) =>
  css`
    color: ${fontColor};
    background-color: ${colors[color].light};
    
    :hover {
      background-color: ${colors[color].main};
    }
  `}
  
  ${({color = 'primary', theme: {colors, fontColor}, transparent}) => transparent && css`
      padding: 17px 48px;
      background-color: transparent;
      border: 2px solid ${colors[color].light};
      color: ${colors[color].light};
      
      :hover {
        border-color: transparent;
        color: ${fontColor};
        background-color: ${colors[color].main};
      }
  `}
`