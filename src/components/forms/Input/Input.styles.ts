import styled, { css } from 'styled-components'

export const StyledInput = styled.input`
  outline: none;
  padding: 18px 14px;
  
  
  ${({ theme: { colors } }) => css`
    color: ${colors.secondary.dark};
    background-color: ${colors.secondary.light};
    border: 1px solid ${colors.secondary.light};
    
    :focus {
      border: 1px solid ${colors.secondary.dark};
    }
  `}
`