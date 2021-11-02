import styled, { css } from 'styled-components'

export const MenuBtn = styled.button`
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

export const MenuBtnDot = styled.span`
  border-radius: 50%;
  width: 6px;
  height: 6px;

  ${({ theme: { colors } }) => css`
    background-color: ${colors.secondary.normal};
  `}
`

interface IMenuItemBtnProps {
  disabled?: boolean
}

export const MenuItemBtn = styled.button<IMenuItemBtnProps>`
  border: none;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background: none;
  padding: 9px 15px;
  
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

    ${disabled && css`
      svg path {
        fill: ${colors.secondary.normal};
      }
    `}
  `}
  
  
`