import styled, { css } from 'styled-components'

export const StyledUl = styled.ul`
    padding-left: 18px;
`

export const StyledLi = styled.li`
  ::marker {
    ${({ theme: { colors } }) => css`
      color: ${colors.danger.dark};
    `}
  }
`