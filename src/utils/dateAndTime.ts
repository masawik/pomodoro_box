export const minToMs = (min: number): number => min * 60000
export const msToMin = (ms: number): number => Math.floor(ms / 60000)

interface ISplitMsResult {
  days: number,
  hours: number,
  minutes: number,
  seconds: number
}

export const splitMs = (ms: number): ISplitMsResult => {
  const roundingFunction = ms >= 0 ? Math.floor : Math.ceil

  const seconds = roundingFunction(ms / 1000)
  const days = roundingFunction(seconds / (3600 * 24))
  const hours = roundingFunction(seconds % (3600 * 24) / 3600)
  const minutes = roundingFunction(seconds % 3600 / 60)
  const sec = roundingFunction(seconds % 60)

  return { days, hours, minutes, seconds: sec }
}

export const getTensOfNumber = (n: number) => Math.floor(n / 10)
export const getUnitsOfNumber = (n: number) => n % 10

export const getTodayAbsoluteTime = (): number => {
  const now = new Date()
  now.setHours(0)
  now.setMinutes(0)
  now.setSeconds(0)
  now.setMilliseconds(0)
  return now.getTime()
}

// функция возвращает день, через заданное число дней, от заданого дня
// today - точка отсчета
// howMuchDays - через сколько дней от заданной точки отсчета выбрать день
export const getDayTimeInDaysFromDayTime =
  (today: number, howMuchDays: number): number => {
    const resultDate = new Date(today)
    resultDate.setDate(resultDate.getDate() + howMuchDays)
    return resultDate.getTime()
  }

interface IDayOfWeek {
  short: string,
  long: string
}

export const weekDays: { [key: number]: IDayOfWeek } = {
  0: {
    short: 'Вс',
    long: 'Воскресенье',
  },
  1: {
    short: 'Пн',
    long: 'Понедельник',
  },
  2: {
    short: 'Вт',
    long: 'Вторник',
  },
  3: {
    short: 'Ср',
    long: 'Среда',
  },
  4: {
    short: 'Чт',
    long: 'Четверг',
  },
  5: {
    short: 'Пт',
    long: 'Пятница',
  },
  6: {
    short: 'Сб',
    long: 'Суббота',
  },
}

export const getDayOfWeekByTime = (time: number): IDayOfWeek => {
  const date = new Date(time)
  const day = date.getDay() as 0 | 1 | 2 | 3 | 4 | 5 | 6
  return weekDays[day]
}

export const msToFormattedString = (ms: number): string => {
  const { days, hours, minutes } = splitMs(ms)
  let result = ''
  if (minutes) result = `${minutes} мин`
  if (hours || days) result = `${hours} ч ${result}`
  if (days) result = `${days} д ${result}`
  return result
}