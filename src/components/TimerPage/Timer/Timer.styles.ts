import styled, { css } from 'styled-components'
import { StyledButton } from '../../forms'

export const STimerContainer = styled.div`
  height: 507px;
  ${({ theme: { colors } }) => css`
    background-color: ${colors.secondary.light};
  `}
`

export const STimerHeader = styled.div`
  padding: 18px 40px;
  display: flex;
  justify-content: space-between;
  ${({ theme: { colors, invertedTextColor } }) => css`
    background-color: ${colors.secondary.normal};
    color: ${invertedTextColor};
  `}
`

export const STimerHeaderTaskName = styled.span`
  font-weight: bold;
`

export const STimerBody = styled.div`
  display: flex;
  align-content: center;
  flex-direction: column;
  align-items: center;
  padding: 75px 178px;
  height: 100%;
`

export const STimerDisplayContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 150px;
  font-weight: 200;
`

export const SPlusBtn = styled.button`
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
      transition-duration: ${transitionDuration}ms;
      transition-property: fill;
      fill: ${colors.secondary.normal}
    }

    :hover {
      svg circle {
        fill: ${colors.primary.dark}
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

export const STimerStartButton = styled(StyledButton)`
  margin-right: 25px;
`