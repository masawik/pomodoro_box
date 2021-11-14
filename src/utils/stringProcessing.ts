interface IsplitSeconds {
  days: number,
  hours: number,
  minutes: number,
  seconds: number
}

export const splitSeconds = (seconds: number): IsplitSeconds => {
  const days = Math.floor(seconds / (3600 * 24))
  const hours = Math.floor(seconds % (3600 * 24) / 3600)
  const minutes = Math.floor(seconds % 3600 / 60)
  const sec = Math.floor(seconds % 60)

  return { days, hours, minutes, seconds: sec }
}

export const secondsToFormattedString = (seconds: number): string => {
  const { days, hours, minutes } = splitSeconds(seconds)
  let result = `${minutes} мин`
  if (hours || days) result = `${hours} ч ${result}`
  if (days) result = `${days} д ${result}`
  return result
}

export const addZero = (str: string | number) =>
  String(str).length === 1 ? `0${str}` : str