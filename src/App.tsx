import React from 'react'
import 'normalize.css'
import { ThemeProvider } from 'styled-components'
import Header from './components/Header/Header'
import GlobalStyle from './globalStyles/globalStyles'
import GlobalFonts from './globalStyles/globalFonts'
import StatisticPage from './components/StatisticPage/StatisticPage'
import TimerPage from './components/TimerPage/TimerPage'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { TRootState } from './store/rootReducer'
import themes from './theme'

const App: React.FC = () => {
  const currentThemeName =
    useSelector((state: TRootState) => state.settings.theme)

  return (
    <ThemeProvider theme={themes[currentThemeName]}>
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
}

export default App