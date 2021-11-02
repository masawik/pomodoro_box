import React from 'react'
import Popup from '../../../layout/Popup/Popup'
import { MenuBtn, MenuBtnDot, MenuItemBtn } from './TaskListItemMenu.styles'
import { ClearLi, ClearUl } from '../../../typography/List/ClearList.styles'
import { ReactComponent as PlusSVG } from '../../../../assets/images/circle_plus.svg'
import { ReactComponent as MinusSVG } from '../../../../assets/images/circle_minus.svg'
import { ReactComponent as PencilSVG } from '../../../../assets/images/pencil.svg'
import { ReactComponent as TrashBinSVG } from '../../../../assets/images/trash_bin.svg'

const $menuBtn = (<MenuBtn><MenuBtnDot /><MenuBtnDot /><MenuBtnDot /></MenuBtn>)

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
  <ClearLi key={index}>
    <MenuItemBtn>
      {icon}
      {text}
    </MenuItemBtn>
  </ClearLi>
))

const TaskListItemMenu = () => {
  return (
    <Popup
      button={$menuBtn}
    >
      <ClearUl>
        {$menuList}
      </ClearUl>
    </Popup>
  )
}

export default TaskListItemMenu