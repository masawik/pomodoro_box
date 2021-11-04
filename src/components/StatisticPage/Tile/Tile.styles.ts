import styled, { css } from 'styled-components'

export const STileContainer = styled.div`
  padding: 25px;
  display: inline-block;
  max-width: 296px;
  
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