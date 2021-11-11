import React from 'react'
import Popup from '../../../../layout/Popup/Popup'
import { SMenuBtn, SMenuBtnDot, SMenuItemBtn } from './TaskListItemMenu.styles'
import {
  SClearLi,
  SClearUl,
} from '../../../../typography/List/ClearList.styles'
import { ReactComponent as PlusSVG } from '../../../../../assets/images/circle_plus.svg'
import { ReactComponent as MinusSVG } from '../../../../../assets/images/circle_minus.svg'
import { ReactComponent as PencilSVG } from '../../../../../assets/images/pencil.svg'
import { ReactComponent as TrashBinSVG } from '../../../../../assets/images/trash_bin.svg'
import { useDispatch } from 'react-redux'
import { taskDelete } from '../../../../../store/task/taskActions'

enum ETaskListItemMenuButtonNames {
  increase = 'increase',
  reduce = 'reduce',
  edit = 'edit',
  delete = 'delete'
}

interface ITaskListItemMenuButtons {
  icon: React.ReactNode,
  text: string,
  name: ETaskListItemMenuButtonNames
}

const $menuBtn = (
  <SMenuBtn>
    <SMenuBtnDot />
    <SMenuBtnDot />
    <SMenuBtnDot />
  </SMenuBtn>
)

const menuItems: Array<ITaskListItemMenuButtons> = [
  {
    icon: (<PlusSVG />),
    text: 'Увеличить',
    name: ETaskListItemMenuButtonNames.increase,
  },
  {
    icon: (<MinusSVG />),
    text: 'Уменьшить',
    name: ETaskListItemMenuButtonNames.reduce,
  },
  {
    icon: (<PencilSVG />),
    text: 'Редактировать',
    name: ETaskListItemMenuButtonNames.edit,
  },
  {
    icon: (<TrashBinSVG />),
    text: 'Удалить',
    name: ETaskListItemMenuButtonNames.delete,
  },
]

const $menuList = menuItems.map(({ icon, text, name }, index) => (
  <SClearLi key={index}>
    <SMenuItemBtn name={name}>
      {icon}
      {text}
    </SMenuItemBtn>
  </SClearLi>
))

interface ITaskListItemMenuProps {
  id: string
}

const TaskListItemMenu: React.FC<ITaskListItemMenuProps> =
  ({ id }) => {
    const dispatch = useDispatch()

    const menuButtonsClickHandler = (e: React.MouseEvent<HTMLElement>) => {
      const target = e.target as HTMLButtonElement
      if (!target.name) return

      switch (target.name) {
        case ETaskListItemMenuButtonNames.delete:
          return dispatch(taskDelete(id))
        default:
          return
      }
    }

    return (
      <Popup
        button={$menuBtn}
      >
        <SClearUl onClick={menuButtonsClickHandler}>
          {$menuList}
        </SClearUl>
      </Popup>
    )
  }

export default TaskListItemMenu