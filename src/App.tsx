import React from 'react'
import 'normalize.css'
import { ThemeProvider } from 'styled-components'
import Header from './components/Header/Header'
import GlobalStyle from './styles/global/globalStyles'
import GlobalFonts from './styles/global/globalFonts'
import StatisticPage from './components/pages/StatisticPage/StatisticPage'
import TimerPage from './components/pages/TimerPage/TimerPage'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import themes from './styles/theme'
import { selectTheme } from './store/settings/settingsSelectors'

const App: React.FC = () => {
  const currentThemeName = useSelector(selectTheme)

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