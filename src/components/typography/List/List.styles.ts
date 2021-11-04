import styled, { css } from 'styled-components'

export const SUl = styled.ul`
    padding-left: 18px;
    margin: 0;
`

export const SLi = styled.li`
  ::marker {
    ${({ theme: { colors } }) => css`
      color: ${colors.danger.dark};
    `}
  }
`