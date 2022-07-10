import { TRootState } from '../rootReducer'

export const selectTheme = (state: TRootState) => state.settings.theme
export const selectSettings = (state: TRootState) => state.settings

