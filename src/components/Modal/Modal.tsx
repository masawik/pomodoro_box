import React, { useRef } from 'react'
import { SModalCloseBtn, SModalContainer, SModalWrapper } from './Modal.styles'
import ReactDOM from 'react-dom'
import { AnimatePresence } from 'framer-motion'


interface IModalProps {
  isVisible: boolean
  onClose: () => void
}

const $modalRootEl = document.querySelector('#modal-root') || document.body


const motionProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: .15 },
}

const Modal: React.FC<IModalProps> =
  ({ children, onClose, isVisible }) => {
    const wrapperRef = useRef(null)

    const onWrapperClick = (e: React.MouseEvent<HTMLDivElement>) => {
      wrapperRef.current &&
      e.target === wrapperRef.current &&
      onClose()
    }

    return ReactDOM.createPortal(
      (
        <AnimatePresence>
          {
            isVisible &&
            <SModalWrapper
              {...motionProps}
              ref={wrapperRef}
              onClick={onWrapperClick}
            >
              <SModalContainer
                {...motionProps}
              >
                <SModalCloseBtn onClick={onClose} />
                {children}
              </SModalContainer>
            </SModalWrapper>
          }
        </AnimatePresence>
      ), $modalRootEl)
  }

export default Modal