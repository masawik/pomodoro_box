import styled, { css } from 'styled-components'
import { IColors } from '../../../theme/themeTypes'

interface StyledButtonProps {
  color?: keyof IColors,
  transparent?: boolean,
  disabled?: boolean
}

export const SButton = styled.button<StyledButtonProps>`
  padding: 19px 50px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  transition-property: background-color, color, border-color;
  cursor: pointer;

  ${({
       disabled,
       color = 'primary',
       theme: { colors, invertedTextColor, transitionDuration },
     }) => {
    if (disabled) color = 'secondary'

    return css`
      transition-duration: ${transitionDuration}ms;
      color: ${invertedTextColor};
      background-color: ${colors[color].normal};

      :hover {
        background-color: ${colors[color].dark};
      }
    `
  }}

  ${({
       disabled,
       color = 'primary',
       theme: { colors, invertedTextColor },
       transparent,
     }) => {
    if (!transparent) return
    if (disabled) color = 'secondary'

    return css`
      padding: 17px 48px;
      background-color: transparent;
      border: 2px solid ${colors[color].normal};
      color: ${colors[color].normal};

      :hover {
        border-color: transparent;
        color: ${invertedTextColor};
        background-color: ${colors[color].dark};
      }
    `
  }}
`

export const SUnderlinedButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  text-decoration: underline;
  padding: 5px 10px;
`