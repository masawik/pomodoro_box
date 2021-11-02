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

const $menuBtn = (<MenuBtn><MenuBtnDot /><MenuBtnDot /><MenuBtnDot /></MenuBtn>)

const TaskListItem = ({ count, name }: ItaskListItemProps) => {
  return (
    <TaskListLi>
      <Count>
        {count}
      </Count>
      {name}


      <Popup
        button={$menuBtn}
      >
        qq
      </Popup>
    </TaskListLi>
  )
}

export default TaskListItem