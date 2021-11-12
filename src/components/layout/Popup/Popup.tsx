import React, { useCallback, useEffect, useRef, useState } from 'react'
import { BtnWrapper, StyledPopup } from './Popup.styles'
import ReactDOM from 'react-dom'

const $popupRoot = document.querySelector('#popup-root') || document.body

interface IPopupProps {
  button: React.ReactNode,
  closeOnClickOutside?: boolean,
  outerIsOpened?: boolean,
  onClose?: () => void,
  onOpen?: () => void
}

const Popup: React.FC<IPopupProps> = ({
                                        children,
                                        button,
                                        closeOnClickOutside = true,
                                        outerIsOpened = false,
                                        onOpen,
                                        onClose,
                                      }) => {
  const popupRef = useRef<HTMLDivElement>(null)
  const btnRef = useRef<HTMLDivElement>(null)
  const [isOpened, setIsOpened] = useState<boolean>(true)
  const [btnPosition, setBtnPosition] = useState<{
    top: number,
    left: number
  }>({ top: 0, left: 0 })

  useEffect(() => {
    setIsOpened(outerIsOpened)
  }, [outerIsOpened])

  const openPopup = () => {
    if (!btnRef.current) return
    const coords = btnRef.current.children[0].getBoundingClientRect()
    setBtnPosition({
      top: coords.bottom + window.scrollY + 10,
      left: coords.left - 60,
    })
    onOpen ? onOpen() : setIsOpened(true)
  }

  const closePopup = useCallback(
    () => onClose ? onClose() : setIsOpened(false),
    [onClose]
  )

  const toggle = () => {
    isOpened ? closePopup() : openPopup()
  }

  //click outside handler
  useEffect(() => {
    if (closeOnClickOutside && isOpened) {
      const handleClick = (e: MouseEvent) => {
        const isClickInside = e.target instanceof Node &&
          popupRef.current?.contains(e.target)

        if (!isClickInside) {
          closePopup()
          document.removeEventListener('click', handleClick)
        }
      }

      document.addEventListener('click', handleClick)
      return () => document.removeEventListener('click', handleClick)
    }
  }, [closeOnClickOutside, closePopup, isOpened])

  return (
    <>
      <BtnWrapper
        ref={btnRef}
        onClick={toggle}
      >
        {button}
      </BtnWrapper>

      {
        isOpened
        &&
        ReactDOM.createPortal((
          <StyledPopup
            style={btnPosition}
            ref={popupRef}
          >
            {children}
          </StyledPopup>
        ), $popupRoot)
      }
    </>
  )
}

export default Popup