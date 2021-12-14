import React, { ChangeEvent, FormEvent, useState } from 'react'
import Modal, { IModalProps } from '../../../Modal/Modal'
import { SModalBody, SModalTitle } from '../../../Modal/Modal.styles'
import {
  SSettingsForm, SSettingsFormButtons, SSettingsFormCheckbox,
  SSettingsFormInputNumber,
  SSettingsFormLabel,
} from './TimerSettings.styles'
import { useSelector } from 'react-redux'
import { TRootState } from '../../../../store/rootReducer'
import { msToMin } from '../../../../utils/dateAndTime'
import { SButton } from '../../../forms'

const TimerSettings: React.FC<IModalProps> =
  ({ isVisible, onClose }) => {
  const {
    onePomodoroTime,
    shortBreakTime,
    longBreakTime,
    longBreakInterval,
    timerEndNotificationEnabled,
  } = useSelector((state: TRootState) => state.settings)

  const [formInputsState, setFormInputsState] =
    useState({
      onePomodoroTime: msToMin(onePomodoroTime),
      shortBreakTime: msToMin(shortBreakTime),
      longBreakTime: msToMin(longBreakTime),
      longBreakInterval,
      timerEndNotificationEnabled,
    })

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormInputsState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const checkHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormInputsState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.checked,
    }))
  }


  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  const $InputNumberElements = [
    {
      value: formInputsState.onePomodoroTime,
      name: 'onePomodoroTime',
      text: 'Продолжительность помидора (мин.)',
    },
    {
      value: formInputsState.shortBreakTime,
      name: 'shortBreakTime',
      text: 'Продолжительность короткого перерыва (мин.)',
    },
    {
      value: formInputsState.longBreakTime,
      name: 'longBreakTime',
      text: 'Продолжительность длинного перерыва (мин.)',
    },
    {
      value: formInputsState.longBreakInterval,
      name: 'longBreakInterval',
      text: 'Интервал длинного перерыва',
    },
  ].map((i, index) => (
    <SSettingsFormLabel key={index}>
      <SSettingsFormInputNumber
        type='number'
        min={1}
        max={99}

        value={i.value}
        name={i.name}
        onChange={inputHandler}
      />
      {i.text}
    </SSettingsFormLabel>
  ))

  return (
    <Modal
      isVisible={isVisible}
      onClose={onClose}
    >
      <SModalBody>
        <SModalTitle>
          Настройки
        </SModalTitle>

        <SSettingsForm
          onSubmit={onSubmit}
        >
          {$InputNumberElements}

          <SSettingsFormLabel>
            <SSettingsFormCheckbox
              type='checkbox'
              checked={formInputsState.timerEndNotificationEnabled}
              name={'timerEndNotificationEnabled'}
              onChange={checkHandler}
            />
            Уведомление об окончании работы таймера
          </SSettingsFormLabel>

          <SSettingsFormButtons>
            <SButton
              color={'danger'}
              onClick={onClose}
            >
              Отмена
            </SButton>

            <SButton
              color={'focus'}
              onClick={() => {
              }}
            >
              Сброс
            </SButton>

            <SButton
              color={'primary'}
              type={'submit'}
            >
              Сохранить
            </SButton>
          </SSettingsFormButtons>
        </SSettingsForm>
      </SModalBody>
    </Modal>
  )
}

export default TimerSettings