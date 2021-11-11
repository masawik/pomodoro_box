import React, { ChangeEvent, FormEvent, useState } from 'react'
import {
  NewTaskInput,
} from './NewTaskForm.styles'
import { StyledButton } from '../../forms'
import { useDispatch } from 'react-redux'
import { taskAdd } from '../../../store/task/taskActions'

const NewTaskForm = () => {
  const [targetName, setTargetName] = useState<string>('')
  const dispatch = useDispatch()

  const inputHandler = (
    { target: { value } }: ChangeEvent<HTMLInputElement>
  ) => {
    setTargetName(value)
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    dispatch(taskAdd(targetName))
    setTargetName('')
  }

  return (
    <form
      onSubmit={onSubmit}
    >
      <NewTaskInput
        value={targetName}
        onChange={inputHandler}
        placeholder='Название задачи'
        required
      />

      <StyledButton type={'submit'}>
        Добавить
      </StyledButton>
    </form>
  )
}

export default NewTaskForm