import React from 'react'
import 'normalize.css'
import { LIGHT_THEME } from './utils/constants/themes.constants'
import { ThemeProvider } from 'styled-components'
import Header from './components/layout/Header/Header'
import GlobalStyle from './globalStyles/globalStyles'
import GlobalFonts from './globalStyles/globalFonts'
import { TimerPage } from './pages'

const App: React.FC = () => (
  <ThemeProvider theme={LIGHT_THEME}>
    <GlobalFonts />
    <GlobalStyle />
    <Header />
    <TimerPage />
  </ThemeProvider>
)

export default App