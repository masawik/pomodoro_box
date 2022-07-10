import styled, { css } from 'styled-components'

export const SMenuBtn = styled.button`
  display: flex;
  margin-left: auto;
  padding: 10px;
  border: none;
  background: none;
  transform: translateX(10px);

  span:not(:last-child) {
    margin-right: 4px;
  }
`

export const SMenuBtnDot = styled.span`
  border-radius: 50%;
  width: 6px;
  height: 6px;

  ${({ theme: { colors } }) => css`
    background-color: ${colors.secondary.normal};
  `}
`

interface ISMenuItemBtnProps {
  disabled?: boolean
}

export const SMenuItemBtn = styled.button<ISMenuItemBtnProps>`
  display: flex;
  align-items: center;
  padding: 9px 15px;
  border: none;
  width: 100%;
  height: 100%;
  background: none;
  
  svg {
    height: 16px;
    width: 16px;
    margin-right: 10px;
  }
  
  ${({ theme: { colors }, disabled = false }) => css`
    color: ${colors.secondary.dark};

    :hover {
      background-color: ${colors.secondary.light};
    }
    
    svg path {
      fill: ${colors.primary.normal};
    }

    ${disabled && css`
      svg path {
        fill: ${colors.secondary.normal};
      }
    `}
  `}
  
  
`