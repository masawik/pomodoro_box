import styled, { css } from 'styled-components'

export const SPopupContainer = styled.div`
  position: absolute;
  padding: 6px 0;
  
  ${({ theme: { colors, backgroundColor } }) => css`
    &, ::after {
      border: 1px solid ${colors.secondary.normal};
      background-color: ${backgroundColor};
    }
    
    ::after{
      content: '';
      height: 9px;
      width: 9px;
      position: absolute;
      top: -6px;
      left: calc(50% - 6px);
      transform: rotate(45deg);
      border-right: transparent;
      border-bottom: transparent;
    }
  `}
`

export const BtnWrapper = styled.div`
  display: contents;
`