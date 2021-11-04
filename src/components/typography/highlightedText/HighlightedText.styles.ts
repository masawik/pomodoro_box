import styled from 'styled-components'

export const HighlightedText = styled.span`
  font-weight: 700;
  color: ${({ theme: { colors } }) => colors.danger.normal };
`