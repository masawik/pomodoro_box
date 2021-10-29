import styled, { css } from 'styled-components'

export const StyledUl = styled.ul`
    padding-left: 18px;
    margin: 0;
`

export const StyledLi = styled.li`
  ::marker {
    ${({ theme: { colors } }) => css`
      color: ${colors.danger.dark};
    `}
  }
`