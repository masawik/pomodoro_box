import styled, { css } from 'styled-components'
import { Rectangle, ResponsiveContainer } from 'recharts'

interface ISChartBarRectangleProps {
  active?: boolean,
  disabled?: boolean
}

export const SChartBarRectangle = styled(Rectangle)<ISChartBarRectangleProps>`
  transition-property: fill;
  cursor: pointer;

  ${({ theme: { colors, transitionDuration } }) => css`
    transition-duration: ${transitionDuration}ms;
    fill: ${colors.danger.light};

    :hover {
      fill: ${colors.danger.normal};
    }
  `}

  ${({ active, disabled, theme: { colors } }) => {
    if (!active) return
    if (disabled) return css`
      &, :hover {
        fill: ${colors.secondary.dark};
      }
    `
    else return css`
      &, :hover {
        fill: ${colors.danger.dark};
      }
    `
  }
  }

  ${({ disabled, theme: { colors } }) => disabled && css`
    fill: ${colors.secondary.normal};

    :hover {
      fill: ${colors.secondary.dark};
    }
  `}
`

export const SResponsiveContainer = styled(ResponsiveContainer)`
  background-color: ${({ theme: { colors } }) => colors.secondary.light};
`

interface ISXAxisTickTextProps {
  active?: boolean
}

export const SXAxisTickText = styled.text<ISXAxisTickTextProps>`
  font-size: 24px;
  cursor: pointer;
  text-anchor: middle;
  fill: ${({ theme: { colors } }) => colors.secondary.dark};

  ${({ active, theme: { colors } }) => active && css`
    fill: ${colors.danger.normal};
  `}
`