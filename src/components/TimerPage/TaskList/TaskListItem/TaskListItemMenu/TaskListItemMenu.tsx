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
  taskIncreasePlannedCount, taskReducePlannedCount,
} from '../../../../../store/task/taskActions'
import TaskDeleteConfirmationModal
  from './TaskDeleteConfirmationModal/TaskDeleteConfirmationModal'

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
    const dispatch = useDispatch()
    const [isMounted, setIsMounted] = useState(false)

    const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false)
    const openMenu = () => setIsMenuOpened(true)
    const closeMenu = () => setIsMenuOpened(false)

    const [isDeleteTaskModalVisible, setIsDeleteTaskModalVisible] =
      useState(false)
    const closeDeleteModal = () => setIsDeleteTaskModalVisible(false)
    const openDeleteTaskModal = () => {
      closeMenu()
      setIsDeleteTaskModalVisible(true)
    }
    const deleteCurrentTask = () => dispatch(taskDelete(id))


    const increaseCount = () => dispatch(taskIncreasePlannedCount(id))
    const reduceCount = () => dispatch(taskReducePlannedCount(id))

    const edit = () => {
      closeMenu()
      editButtonClickHandler()
    }

    useEffect(() => {
      setIsMounted(true)
      return () => setIsMounted(false)
    }, [])

    return isMounted ? (
      <>
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
                onClick={openDeleteTaskModal}
                name={ETaskListItemMenuButtonNames.delete}
              >
                <TrashBinSVG />
                Удалить
              </SMenuItemBtn>
            </SClearLi>
          </SClearUl>
        </Popup>

        <TaskDeleteConfirmationModal
          isVisible={isDeleteTaskModalVisible}
          onClose={closeDeleteModal}
          onDelete={deleteCurrentTask}
        />
      </>
    ) : null
  }

export default TaskListItemMenu