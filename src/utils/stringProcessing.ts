export const addZero = (str: string | number) =>
  String(str).length === 1 ? `0${str}` : str