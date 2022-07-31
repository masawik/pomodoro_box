import styled, { css } from 'styled-components'
import { IColorableComponent } from '../index.styles'

export const STimerWatchface = styled.span<IColorableComponent>`
  transition-property: color;
  width: 378px;
  display: flex;
  ${({
       color,
       theme: { colors, textColor, transitionDuration },
     }) => {
    const localTextColor = color ? colors[color].normal : textColor
    return css`
      transition-duration: ${transitionDuration}ms;
      color: ${localTextColor};
    `
  }}
`
