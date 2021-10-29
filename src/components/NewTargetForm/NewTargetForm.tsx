import React, { ChangeEvent, FormEvent, useState } from 'react'
import {
  StyledNewTargetFormInput,
} from './NewTargetForm.styles'
import { StyledButton } from '../forms'

const NewTargetForm = () => {
  
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
      <StyledNewTargetFormInput
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

export default NewTargetForm