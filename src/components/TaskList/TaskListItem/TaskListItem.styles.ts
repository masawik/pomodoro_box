import styled, { css } from 'styled-components'

export const TaskListLi = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 15px 0;

  ${({ theme: { colors } }) => css`
    border-top: 1px solid ${colors.secondary.light};
    
    :last-child {
      border-bottom: 1px solid ${colors.secondary.light};
    }
  `}
  
  
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