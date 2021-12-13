import React from 'react'
import 'normalize.css'
import { DARK_THEME, LIGHT_THEME } from './utils/constants/themes.constants'
import { ThemeProvider } from 'styled-components'
import Header from './components/Header/Header'
import GlobalStyle from './globalStyles/globalStyles'
import GlobalFonts from './globalStyles/globalFonts'
import StatisticPage from './components/StatisticPage/StatisticPage'
import TimerPage from './components/TimerPage/TimerPage'
import { Navigate, Route, Routes } from 'react-router-dom'

//todo разобраться с ререндером стилей
const App: React.FC = () => (
  <ThemeProvider theme={DARK_THEME}>
    <GlobalFonts />
    <GlobalStyle />

    <Header />

    <Routes>
      <Route path='/' element={<TimerPage />} />

      <Route path='/statistic' element={<StatisticPage />} />

      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  </ThemeProvider>
)

export default App