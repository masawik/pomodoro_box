import styled, { css } from 'styled-components'
import { IColors } from '../../../theme/themeTypes'

export const STileContainer = styled.div`
  position: relative;
  padding: 25px;
  display: inline-block;
  width: 296px;
  line-height: 28px;

  :not(:last-child) {
    margin-bottom: 32px;
    margin-right: 32px;
  }

  ${({ theme: { colors } }) => css`
    background-color: ${colors.secondary.light};
  `}
`

export const DayAndTotalTimeTileContainer = styled(STileContainer)`
  height: 260px;
`

export const STileTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 14px;
`

export const SPomodoroCountContainer = styled(STileContainer)`
  display: flex;
  justify-content: center;
  height: 179px;
`

export const SPomodoroCountBody = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 51px;

  svg {
    height: 81px;
    width: 81px;
  }

  span {
    margin-left: 15px;
    font-size: 24px;
    font-weight: bold;
    color: ${({ theme: { colors } }) => colors.secondary.dark};
  }
`

export const SPomodoroCountFooter = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 51px;
  font-size: 24px;
  font-weight: bold;

  ${({ theme: { colors, invertedTextColor } }) => css`
    background-color: ${colors.danger.normal};
    color: ${invertedTextColor};
  `}
`


interface ISStatisticTileProps {
  color?: keyof IColors
}

export const SStatisticTile = styled(STileContainer)<ISStatisticTileProps>`
  position: relative;
  width: 405px;
  height: 179px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition-property: background-color;

  svg {
    position: absolute;
    right: 25px;
    top: 35px;
  }

  span {
    font-size: 64px;
    line-height: 50px;
  }

  svg path {
    transition-property: stroke;
  }

  ${STileTitle} {
    margin-bottom: 20px;
  }

  ${({ theme: { transitionDuration } }) => css`
    &, svg path {
      transition-duration: ${transitionDuration}ms;
    }
  `}

  ${({ color = 'secondary', theme: { colors } }) => css`
    background-color: ${colors[color].light};

    svg path {
      stroke: ${colors[color].normal};
    }

  `}
`