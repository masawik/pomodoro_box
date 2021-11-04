import React from 'react'
import Popup from '../../../layout/Popup/Popup'
import { SMenuBtn, SMenuBtnDot, SMenuItemBtn } from './TaskListItemMenu.styles'
import { SClearLi, SClearUl } from '../../../typography/List/ClearList.styles'
import { ReactComponent as PlusSVG } from '../../../../assets/images/circle_plus.svg'
import { ReactComponent as MinusSVG } from '../../../../assets/images/circle_minus.svg'
import { ReactComponent as PencilSVG } from '../../../../assets/images/pencil.svg'
import { ReactComponent as TrashBinSVG } from '../../../../assets/images/trash_bin.svg'

const $menuBtn = (<SMenuBtn><SMenuBtnDot /><SMenuBtnDot /><SMenuBtnDot /></SMenuBtn>)

interface ITaskListMenuItem {
  icon: React.ReactNode,
  text: string
}

const menuItems: Array<ITaskListMenuItem> = [
  {
    icon: (<PlusSVG/>),
    text: 'Увеличить',
  },
  {
    icon: (<MinusSVG/>),
    text: 'Уменьшить',
  },
  {
    icon: (<PencilSVG/>),
    text: 'Редактировать',
  },
  {
    icon: (<TrashBinSVG/>),
    text: 'Удалить',
  },
]

const $menuList = menuItems.map(({ icon, text }, index) => (
  <SClearLi key={index}>
    <SMenuItemBtn>
      {icon}
      {text}
    </SMenuItemBtn>
  </SClearLi>
))

const TaskListItemMenu = () => {
  return (
    <Popup
      button={$menuBtn}
    >
      <SClearUl>
        {$menuList}
      </SClearUl>
    </Popup>
  )
}

export default TaskListItemMenu