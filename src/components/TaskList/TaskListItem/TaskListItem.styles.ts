import styled, { css } from 'styled-components'

export const StyledLi = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
`

export const Count = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  border-radius: 50%;
  width: 23px;
  height: 23px;
  font-size: 16px;
  
  ${({ theme: { colors } }) => css`
    border: 1px solid ${colors.secondary.normal};
  `}
`

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