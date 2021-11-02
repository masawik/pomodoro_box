import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    //todo убрать padding
    padding-bottom: 500px;
    font-family: 'SF UI Display', sans-serif;
    ${({ theme: { textColor, backgroundColor } }) => css`
      color: ${textColor};
      background-color: ${backgroundColor};
    `};
  }
`

export default GlobalStyle