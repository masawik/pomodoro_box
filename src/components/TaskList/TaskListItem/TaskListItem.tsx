import React from 'react'
import {
  StyledLi,
  Count, MenuBtn, MenuBtnDot,
} from './TaskListItem.styles'

export interface ItaskListItemProps {
  name: string,
  count: number
}

const TaskListItem = ({ count, name }: ItaskListItemProps) => {
  return (
    <StyledLi>
      <Count>
        {count}
      </Count>
      {name}

      <MenuBtn>
        <MenuBtnDot />
        <MenuBtnDot />
        <MenuBtnDot />
      </MenuBtn>
    </StyledLi>
  )
}

export default TaskListItem