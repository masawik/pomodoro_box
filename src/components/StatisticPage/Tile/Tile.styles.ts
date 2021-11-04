import styled, { css } from 'styled-components'

export const STileContainer = styled.div`
  position: relative;
  padding: 25px;
  display: inline-block;
  max-width: 296px;

  :not(:last-child) {
    margin-bottom: 32px;
    margin-right: 32px;
  }

  ${({ theme: { colors } }) => css`
    background-color: ${colors.secondary.light};
  `}
`

export const STileTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
`

export const STileText = styled.div`
  line-height: 28px;
`

export const SPomodoroCountContainer = styled(STileContainer)`
  display: flex;
  justify-content: center;
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