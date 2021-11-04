import styled, { css } from 'styled-components'

export const STaskListUl = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
`

export const STaskListTotalTimeSum = styled.div`
  margin-top: 19px;
  ${({ theme: { colors } }) => css`
    color: ${colors.secondary.dark};
  `}
`