import styled, { css } from 'styled-components'

export const TaskListUl = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
`

export const TotalTimeSum = styled.div`
  margin-top: 19px;
  ${({ theme: { colors } }) => css`
    color: ${colors.secondary.dark};
  `}
`