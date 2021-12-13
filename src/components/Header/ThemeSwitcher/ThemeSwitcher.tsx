import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SThemeSwitchButton } from './ThemeSwitcher.styles'
import { TRootState } from '../../../store/rootReducer'
import { EThemeNames } from '../../../theme/themeTypes'
import {
  settingsThemeSetDark,
  settingsThemeSetLight,
} from '../../../store/settings/settingsActions'

const ThemeSwitcher = () => {
  const currentThemeName =
    useSelector((state: TRootState) => state.settings.theme.name)

  const dispatch = useDispatch()

  const toggleTheme = () => {
    currentThemeName === EThemeNames.LIGHT
      ? dispatch(settingsThemeSetDark())
      : dispatch(settingsThemeSetLight())
  }

  const btnTheme = currentThemeName === EThemeNames.LIGHT
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