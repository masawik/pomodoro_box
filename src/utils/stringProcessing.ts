interface IsplitSeconds {
  days: number,
  hours: number,
  minutes: number,
  seconds: number
}

const splitSeconds = (seconds: number): IsplitSeconds => {
  const days = Math.floor(seconds / (60 * 60 * 24))
  let rest = seconds % (60 * 60 * 24)

  const hours = Math.floor(rest / (60 * 60))
  rest = rest % (60 * 60)

  const minutes = Math.floor(rest / 60)
  rest = rest / 60

  return { days, hours, minutes, seconds: rest }
}

export const secondsToFormattedString = (seconds: number): string => {
  const { days, hours, minutes } = splitSeconds(seconds)
  let result = `${minutes} мин`
  if (hours || days) result = `${hours} ч ${result}`
  if (days) result = `${days} д ${result}`
  return result
}