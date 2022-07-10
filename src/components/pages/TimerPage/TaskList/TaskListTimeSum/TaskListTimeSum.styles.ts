import styled, { css } from 'styled-components'

export const STaskListTotalTimeSum = styled.div`
  margin-top: 19px;
  ${({ theme: { colors } }) => css`
    color: ${colors.secondary.dark};
  `}
`