import React from 'react'
import { STimerWatchface } from './Watchface.styles'
import { IColors } from '../../../../utils/constants/themes.constants'
import {
  getTensOfNumber,
  getUnitsOfNumber,
  splitMs,
} from '../../../../utils/dateAndTime'
import { AnimatePresence, motion } from 'framer-motion'

interface IWatchfaceProps {
  color: keyof IColors | undefined
  time: number
}

interface IWatchFaceNumberProps {
  number: number
}

const watchFaceNumberVariants = {
  initial: { opacity: 0, y: -30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 30 },
}

const WatchFaceNumber: React.FC<IWatchFaceNumberProps> =
  ({ number }) => {
    return (
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={number}
          initial={watchFaceNumberVariants.initial}
          animate={watchFaceNumberVariants.animate}
          exit={watchFaceNumberVariants.exit}
          transition={{
            duration: .2,
            ease: 'easeOut'
          }}
        >
          {number}
        </motion.div>
      </AnimatePresence>
    )
  }

const Watchface: React.FC<IWatchfaceProps> = ({ color, time }) => {
  const { minutes, seconds } = splitMs(time)

  const tensOfMinutes = getTensOfNumber(minutes)
  const unitsOfMinutes = getUnitsOfNumber(minutes)
  const tensOfSeconds = getTensOfNumber(seconds)
  const unitsOfSeconds = getUnitsOfNumber(seconds)

  return (
    <STimerWatchface
      color={color}
    >
      <WatchFaceNumber
        number={tensOfMinutes}
      />
      <WatchFaceNumber
        number={unitsOfMinutes}
      />
      <span>:</span>
      <WatchFaceNumber
        number={tensOfSeconds}
      />
      <WatchFaceNumber
        number={unitsOfSeconds}
      />
    </STimerWatchface>
  )
}

export default Watchface