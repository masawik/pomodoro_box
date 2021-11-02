import React, { ChangeEvent, FormEvent, useState } from 'react'
import {
  NewTaskInput,
} from './NewTaskForm.styles'
import { StyledButton } from '../forms'

const NewTaskForm = () => {
  
  const [targetName, setTargetName] = useState<string>('')

  const inputHandler = (
    { target: { value } }: ChangeEvent<HTMLInputElement>
  ) => {
    setTargetName(value)
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log(`targetName: ${targetName}`)
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