import React from 'react'
import { StyledPopup } from './Popup.styles'


const Popup: React.FC = ({ children }) => {
  return (
    <StyledPopup>
      {children}
    </StyledPopup>
  )
}

export default Popup