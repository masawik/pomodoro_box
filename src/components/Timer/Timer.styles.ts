import styled, { css } from 'styled-components'
import { StyledButton } from '../forms'

export const TimerContainer = styled.div`
  height: 507px;
  ${({ theme: { colors } }) => css`
    background-color: ${colors.secondary.light};
  `}
`

export const TimerHeader = styled.div`
  padding: 18px 40px;
  display: flex;
  justify-content: space-between;
  ${({ theme: { colors, invertedTextColor } }) => css`
    background-color: ${colors.secondary.normal};
    color: ${invertedTextColor};
  `}
`

export const TimerHeaderTaskName = styled.span`
  font-weight: bold;
`

export const TimerBody = styled.div`
  display: flex;
  align-content: center;
  flex-direction: column;
  align-items: center;
  padding: 75px 178px;
  height: 100%;
`

export const TimerDisplayContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 150px;
  font-weight: 200;
`

export const PlusBtn = styled.button`
  position: absolute;
  top: calc(50% - 25px);
  right: -82px;
  display: flex;
  border: none;
  background: none;
  cursor: pointer;

  &, svg {
    width: 62px;
  }

  ${({ theme: { colors, transitionDuration } }) => css`
    svg circle {
      transition-property: fill;
      transition-duration: ${transitionDuration}ms;
      fill: ${colors.secondary.normal}
    }

    :hover {
      svg circle {
        fill: ${colors.primary.dark}
      }
    }
  `}
`

export const TimerDescriptionTaskCount = styled.span`
  color: ${({ theme: { colors } }) => colors.secondary.dark};
`

export const TimerControls = styled.div`
  margin-top: 32px;
`

export const TimerStartButton = styled(StyledButton)`
  margin-right: 25px;
`