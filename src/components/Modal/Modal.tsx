import React, { useRef } from 'react'
import { SModalCloseBtn, SModalContainer, SModalWrapper } from './Modal.styles'
import ReactDOM from 'react-dom'


interface IModalProps {
  onClose: () => void
}

const $modalRootEl = document.querySelector('#modal-root') || document.body

const Modal: React.FC<IModalProps> =
  ({ children, onClose }) => {
    const wrapperRef = useRef(null)

    const onWrapperClick = (e: React.MouseEvent<HTMLDivElement>) => {
      wrapperRef.current &&
        e.target === wrapperRef.current &&
          onClose()
    }

    return ReactDOM.createPortal(
      (
        <SModalWrapper
          ref={wrapperRef}
          onClick={onWrapperClick}
        >
          <SModalContainer>
            <SModalCloseBtn onClick={onClose} />
            {children}
          </SModalContainer>
        </SModalWrapper>
      ), $modalRootEl)
  }

export default Modal