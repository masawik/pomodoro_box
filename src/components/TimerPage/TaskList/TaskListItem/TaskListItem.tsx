import React, {
  ChangeEvent, FormEvent, useCallback, useEffect, useRef,
  useState,
} from 'react'
import {
  STaskListLi,
  STaskListItemCount, STaskListItemNameChangeInput, STaskListItemName,
} from './TaskListItem.styles'
import TaskListItemMenu from './TaskListItemMenu/TaskListItemMenu'
import { taskChangeName } from '../../../../store/task/taskActions'
import { useDispatch } from 'react-redux'

export interface ITaskListItemProps {
  id: string,
  name: string,
  count: number
}

const TaskListItem = ({ count, name, id }: ITaskListItemProps) => {
  const [isEditModeOn, setIsEditModeOn] = useState(false)
  const [newTaskName, setNewTaskName] = useState<string>(name)
  const changeNameInputRef = useRef<HTMLInputElement>(null)
  const dispatch = useDispatch()

  const saveNewNameAndHideInput = useCallback(() => {
    if (!newTaskName.length) return
    dispatch(taskChangeName(id, newTaskName))
    setIsEditModeOn(false)
  }, [dispatch, id, newTaskName])

  const enableEditMode = () => {
    !isEditModeOn && setIsEditModeOn(true)
  }

  const taskNameInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskName(e.target.value)
  }

  const changeTaskNameFormSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    saveNewNameAndHideInput()
    if (changeNameInputRef.current) {
      changeNameInputRef.current.onblur = null
    }
  }

  useEffect(() => {
    if (!isEditModeOn || !changeNameInputRef.current) return
    changeNameInputRef.current.focus()
    changeNameInputRef.current.onblur = saveNewNameAndHideInput
  }, [isEditModeOn, saveNewNameAndHideInput])

  return (
    <STaskListLi>
      <STaskListItemCount>
        {count}
      </STaskListItemCount>
      {
        isEditModeOn ?
          (
            <form
              onSubmit={changeTaskNameFormSubmitHandler}
            >
              <STaskListItemNameChangeInput
                ref={changeNameInputRef}
                type='text'
                value={newTaskName}
                onChange={taskNameInputHandler}
                required
              />
            </form>
          )
          :
          <STaskListItemName onDoubleClick={enableEditMode}>
            {name}
          </STaskListItemName>
      }

      <TaskListItemMenu
        id={id}
        currentTaskPomodoroCount={count}
        editButtonClickHandler={enableEditMode}
      />
    </STaskListLi>
  )
}

export default TaskListItem