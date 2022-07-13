import {
  getDayOfWeekByTime,
  getDayTimeInDaysFromDayTime,
  getTensOfNumber,
  getTodayAbsoluteTime,
  minToMs, msToFormattedString,
  msToMin,
  splitMs,
  weekDays,
} from '../dateAndTime'

describe('minToMs & msToMin', () => {
  interface ITestItem {
    text: string,
    min: number,
    ms: number
  }

  const testsWithReliableValues: ITestItem[] = [
    {
      text: '1 минута',
      min: 1,
      ms: 60000,
    },
    {
      text: '15 минут',
      min: 15,
      ms: 900000,
    },
    {
      text: 'отрицательное значение',
      min: -2,
      ms: -120000,
    },
    {
      text: 'нулевое значение',
      min: 0,
      ms: 0,
    },
  ]

  describe('minToMs', () => {
    testsWithReliableValues.forEach(testItem => {
      test(testItem.text, () => {
        expect(minToMs(testItem.min)).toBe(testItem.ms)
      })
    })
  })

  describe('msToMin', () => {
    testsWithReliableValues.forEach(testItem => {
      test(testItem.text, () => {
        expect(msToMin(testItem.ms)).toBe(testItem.min)
      })
    })
  })

})

describe('splitMs', () => {
  test('нулевое значение', () => {
    expect(splitMs(0))
      .toEqual({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      })
  })

  test('отрицательное значение', () => {
    expect(splitMs(-1000))
      .toEqual({
        days: -0,
        hours: -0,
        minutes: -0,
        seconds: -1,
      })
  })

  test('1 секунда', () => {
    expect(splitMs(1000))
      .toEqual({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 1,
      })
  })

  test('1 минута', () => {
    expect(splitMs(60000))
      .toEqual({
        days: 0,
        hours: 0,
        minutes: 1,
        seconds: 0,
      })
  })

  test('1 час', () => {
    expect(splitMs(3600000))
      .toEqual({
        days: 0,
        hours: 1,
        minutes: 0,
        seconds: 0,
      })
  })

  test('1 день', () => {
    expect(splitMs(86400000))
      .toEqual({
        days: 1,
        hours: 0,
        minutes: 0,
        seconds: 0,
      })
  })

  test('1 день 1 час 1 минута 1 секунда', () => {
    expect(splitMs(90061000))
      .toEqual({
        days: 1,
        hours: 1,
        minutes: 1,
        seconds: 1,
      })
  })
})

describe('getTensOfNumber', () => {
  test('кратные значения', () => {
    expect(getTensOfNumber(100)).toBe(10)
    expect(getTensOfNumber(1000)).toBe(100)
    expect(getTensOfNumber(500)).toBe(50)

    expect(getTensOfNumber(-10)).toBe(-1)
    expect(getTensOfNumber(-100)).toBe(-10)
  })

  test('не кратные значения', () => {
    expect(getTensOfNumber(186)).toBe(18)
    expect(getTensOfNumber(12)).toBe(1)
    expect(getTensOfNumber(185467)).toBe(18546)

    expect(getTensOfNumber(-157)).toBe(-16)
    expect(getTensOfNumber(-786)).toBe(-79)
  })

  test('0 и около нуля', () => {
    expect(getTensOfNumber(0)).toBe(0)
    expect(getTensOfNumber(1)).toBe(0)
    expect(getTensOfNumber(9)).toBe(0)

    expect(getTensOfNumber(-0)).toBe(-0)

    expect(getTensOfNumber(-1)).toBe(-1)
    expect(getTensOfNumber(-9)).toBe(-1)
  })
})

test('getTodayAbsoluteTime', () => {
  jest
    .useFakeTimers('modern')
    .setSystemTime(new Date('10.07.2022, 22:52:42'))
  const expectedResult = (new Date('10.07.2022, 00:00:00')).getTime()

  expect(getTodayAbsoluteTime()).toBe(expectedResult)
})

describe('getDayTimeInDaysFromDayTime', () => {
  const today = new Date('10.10.2022, 00:00:00').getTime()

  test('нулевое смещение', () => {
    expect(getDayTimeInDaysFromDayTime(today, 0))
      .toBe(today)
  })

  test('положительное смещение', () => {
    expect(getDayTimeInDaysFromDayTime(today, 4))
      .toBe((new Date('10.14.2022, 00:00:00')).getTime())
  })

  test('положительное смещение выход за рамки месяца', () => {
    expect(getDayTimeInDaysFromDayTime(today, 35))
      .toBe((new Date('11.14.2022, 00:00:00')).getTime())
  })

  test('отрицательное смещение', () => {
    expect(getDayTimeInDaysFromDayTime(today, -5))
      .toBe((new Date('10.05.2022, 00:00:00')).getTime())
  })

  test('отрицательное смещение выход за рамки месяца', () => {
    expect(getDayTimeInDaysFromDayTime(today, -14))
      .toBe((new Date('09.26.2022, 00:00:00')).getTime())
  })
})

test('getDayOfWeekByTime', () => {
  const today = new Date('07.10.2022 00:00:00')

  new Array(7)
    .forEach((_, dayIndex) => {
      expect(getDayOfWeekByTime(today.getTime()))
        .toEqual(weekDays[dayIndex])

      today.setDate(today.getDate() + 1)
    })
})

test('msToFormattedString', () => {
  expect(msToFormattedString(90061000))
    .toBe('1 д 1 ч 1 мин')
})