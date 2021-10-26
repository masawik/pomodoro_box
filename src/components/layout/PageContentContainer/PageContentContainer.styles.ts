import styled, { css } from 'styled-components'

const PageContentContainer = styled.div`
  margin: 100px auto 0 auto;
  ${({ theme: { layoutWidth } }) => css`
    max-width: ${layoutWidth}px;
  `}
`

export default PageContentContainer