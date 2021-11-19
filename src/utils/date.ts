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


export const getTodayAbsoluteTime = (): number => {
  const now = new Date()
  now.setHours(0)
  now.setMinutes(0)
  now.setSeconds(0)
  now.setMilliseconds(0)
  return now.getTime()
}

export const getTimeInDaysFromToday =
  (today: number, howMuchDays: number): number => {
    const resultDate = new Date(today)
    resultDate.setDate(resultDate.getDate() + howMuchDays)
    return resultDate.getTime()
  }

const weekDays = {
  0: 'Вс',
  1: 'Пн',
  2: 'Вт',
  3: 'Ср',
  4: 'Чт',
  5: 'Пт',
  6: 'Сб',
}

export const getShortDayOfWeekByTime = (time: number): string => {
  const date = new Date(time)
  const day = date.getDay() as 0 | 1 | 2 | 3 | 4 | 5 | 6
  return weekDays[day]
}

export const secondsToFormattedString = (seconds: number): string => {
  const { days, hours, minutes } = splitSeconds(seconds)
  let result = `${minutes} мин`
  if (hours || days) result = `${hours} ч ${result}`
  if (days) result = `${days} д ${result}`
  return result
}