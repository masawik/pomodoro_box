import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'SF UI Display', sans-serif;
    color: ${({ theme: { textColor } }) => textColor};
  }
`

export default GlobalStyle