import React, { useEffect, useState } from 'react'
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
import {
  taskDelete,
  taskIncreaseCount, taskReduceCount,
} from '../../../../../store/task/taskActions'

enum ETaskListItemMenuButtonNames {
  increase = 'increase',
  reduce = 'reduce',
  edit = 'edit',
  delete = 'delete'
}

const $menuBtn = (
  <SMenuBtn>
    <SMenuBtnDot />
    <SMenuBtnDot />
    <SMenuBtnDot />
  </SMenuBtn>
)

interface ITaskListItemMenuProps {
  id: string,
  currentTaskPomodoroCount: number,
  editButtonClickHandler: () => void,
}

const TaskListItemMenu: React.FC<ITaskListItemMenuProps> =
  ({
     id,
     currentTaskPomodoroCount,
     editButtonClickHandler,
   }) => {
    const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false)
    const openMenu = () => setIsMenuOpened(true)
    const closeMenu = () => setIsMenuOpened(false)

    const dispatch = useDispatch()
    const increaseCount = () => dispatch(taskIncreaseCount(id))
    const reduceCount = () => dispatch(taskReduceCount(id))
    const edit = () => {
      closeMenu()
      editButtonClickHandler()
    }
    const deleteTask = () => dispatch(taskDelete(id))

    return (
      <Popup
        button={$menuBtn}
        outerIsOpened={isMenuOpened}
        onOpen={openMenu}
        onClose={closeMenu}
      >
        <SClearUl>
          <SClearLi>
            <SMenuItemBtn
              onClick={increaseCount}
              name={ETaskListItemMenuButtonNames.increase}
            >
              <PlusSVG />
              Увеличить
            </SMenuItemBtn>
          </SClearLi>

          <SClearLi>
            <SMenuItemBtn
              onClick={reduceCount}
              disabled={currentTaskPomodoroCount === 1}
              name={ETaskListItemMenuButtonNames.reduce}
            >
              <MinusSVG />
              Уменьшить
            </SMenuItemBtn>
          </SClearLi>

          <SClearLi>
            <SMenuItemBtn
              onClick={edit}
              name={ETaskListItemMenuButtonNames.edit}
            >
              <PencilSVG />
              Редактировать
            </SMenuItemBtn>
          </SClearLi>

          <SClearLi>
            <SMenuItemBtn
              onClick={deleteTask}
              name={ETaskListItemMenuButtonNames.delete}
            >
              <TrashBinSVG />
              Удалить
            </SMenuItemBtn>
          </SClearLi>
        </SClearUl>
      </Popup>
    )
  }

export default TaskListItemMenu