import React, { useEffect, useRef, useState } from 'react'
import { BtnWrapper, StyledPopup } from './Popup.styles'
import ReactDOM from 'react-dom'

const $popupRoot = document.querySelector('#popup-root') || document.body

interface IPopupProps {
  button: React.ReactNode,
  closeOnClickOutside?: boolean
}

const Popup: React.FC<IPopupProps> = ({
                                        children,
                                        button,
                                        closeOnClickOutside = true,
                                      }) => {
  const popupRef = useRef<HTMLDivElement>(null)
  const btnRef = useRef<HTMLDivElement>(null)
  const [isOpened, setIsOpened] = useState<boolean>(false)
  const [btnPosition, setBtnPosition] = useState<{
    top: number,
    left: number
  }>({ top: 0, left: 0 })

  const openPopup = () => {
    if (!btnRef.current) return
    const coords = btnRef.current.children[0].getBoundingClientRect()
    setBtnPosition({
      top: coords.bottom + window.scrollY + 10,
      left: coords.left - 60,
    })
    setIsOpened(true)
  }

  const toggle = () => {
    isOpened ? setIsOpened(false) : openPopup()
  }

  //click outside handler
  useEffect(() => {
    if (closeOnClickOutside && isOpened) {
      const handleClick = (e: MouseEvent) => {
        const isClickInside = e.target instanceof Node &&
          popupRef.current?.contains(e.target)

        if (!isClickInside) {
          setIsOpened(false)
          document.removeEventListener('click', handleClick)
        }
      }

      document.addEventListener('click', handleClick)
      return () => document.removeEventListener('click', handleClick)
    }
  }, [closeOnClickOutside, isOpened])

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