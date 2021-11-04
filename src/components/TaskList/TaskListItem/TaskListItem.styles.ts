import styled, { css } from 'styled-components'

export const STaskListLi = styled.li`
  display: flex;
  align-items: center;
  padding: 15px 0;
  list-style: none;
  ${({ theme: { colors } }) => css`
    border-top: 1px solid ${colors.secondary.light};
    
    :last-child {
      border-bottom: 1px solid ${colors.secondary.light};
    }
  `}  
`

export const STaskListItemCount = styled.div`
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