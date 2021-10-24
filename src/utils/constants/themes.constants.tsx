interface IColor {
  main: string,
  light?: string
}

// this function is needed in order to force TypeScript to recognize object keys as separate elements during typing
function makeObjectKeysKeyofable<T extends Record<any, IColor>>(cfg: T) : T {
  return cfg;
}
// todo по по окончании сделать отдельный интерфейс для типов цветов и захардкодить их

export const COLORS = makeObjectKeysKeyofable({
  primary: {
    main: '#899441',
    light: '#a8b64f'
  },
  danger: {
    main: '#dc3e22',
    light: '#ee735d'
  }
})

export const defaultTheme = {
  colors: COLORS
}