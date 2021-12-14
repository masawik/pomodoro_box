import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SThemeSwitchButton } from './ThemeSwitcher.styles'
import { TRootState } from '../../../store/rootReducer'
import {
  settingsThemeSetDark,
  settingsThemeSetLight,
} from '../../../store/settings/settingsActions'

const ThemeSwitcher = () => {
  const currentThemeName =
    useSelector((state: TRootState) => state.settings.theme)

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