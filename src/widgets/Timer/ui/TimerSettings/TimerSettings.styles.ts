import styled from 'styled-components'
import { SButton, StyledInput } from '../../../../components/forms'

export const SSettingsForm = styled.form`
  display: flex;
  flex-direction: column;
`

export const SSettingsFormInputNumber = styled(StyledInput)`
  padding: 5px 1px 5px 8px;
  width: 50px;
  margin-right: 10px;
`

export const SSettingsFormLabel = styled.label`
  display: flex;
  align-items: center;
  
  :not(:last-child) {
    margin-bottom: 10px;
  }
`

export const SSettingsFormCheckbox = styled.input`
  height: 20px;
  width: 20px;
  margin-right: 5px;
`

export const SSettingsFormButtons = styled.div`
  margin-top: 20px;
  
  ${SButton}:not(:last-child) {
    margin-right: 10px;
  }
`