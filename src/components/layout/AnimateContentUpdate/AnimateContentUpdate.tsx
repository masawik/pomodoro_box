import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface IAnimateContentUpdateProps {
  updateKey: string | number
}

const rerenderAnimationProps = {
  exit: { opacity: 0 },
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: .1 },
}

const AnimateContentUpdate: React.FC<IAnimateContentUpdateProps> =
  ({ updateKey, children }) => {
    return (
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={updateKey}
          {...rerenderAnimationProps}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    )
  }

export default AnimateContentUpdate