import React from 'react'
import {
  TaskListLi,
  Count, MenuBtn, MenuBtnDot,
} from './TaskListItem.styles'
import Popup from '../../layout/Popup/Popup'

export interface ItaskListItemProps {
  name: string,
  count: number
}

const TaskListItem = ({ count, name }: ItaskListItemProps) => {
  return (
    <TaskListLi>
      <Count>
        {count}
      </Count>
      {name}
      <MenuBtn>
        <MenuBtnDot />
        <MenuBtnDot />
        <MenuBtnDot />
      </MenuBtn>
    </TaskListLi>
  )
}

export default TaskListItem