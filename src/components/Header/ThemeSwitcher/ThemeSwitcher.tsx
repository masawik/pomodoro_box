import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SThemeSwitchButton } from './ThemeSwitcher.styles'
import {
  settingsThemeSetDark,
  settingsThemeSetLight,
} from '../../../store/settings/settingsActions'
import { selectTheme } from '../../../store/settings/settingsSelectors'


const ThemeSwitcher = () => {
  const currentThemeName = useSelector(selectTheme)
  const dispatch = useDispatch()

  const toggleTheme = () => {
    currentThemeName === 'LIGHT_THEME'
      ? dispatch(settingsThemeSetDark())
      : dispatch(settingsThemeSetLight())
  }

  const btnTheme = currentThemeName === 'LIGHT_THEME'
    ? 'moon'
    : 'sun'

  return (
    <SThemeSwitchButton
      btnTheme={btnTheme}
      onClick={toggleTheme}
    />
  )
}

export default ThemeSwitcher