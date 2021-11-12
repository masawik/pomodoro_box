import styled, { css } from 'styled-components'

export const STaskListLi = styled.li`
  display: flex;
  align-items: center;
  padding: 15px 0;
  word-break: break-word;
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

export const STaskListItemName = styled.div`
  width: 280px;
  padding: 1px 2px;
`

export const STaskListItemNameChangeInput = styled.input`
  border: none;
  outline: none;
  width: 280px;
  background-color: ${({ theme: { colors } }) => colors.secondary.light};
`