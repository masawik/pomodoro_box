import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  SSettingsForm, SSettingsFormButtons, SSettingsFormCheckbox,
  SSettingsFormInputNumber,
  SSettingsFormLabel,
} from './TimerSettings.styles'
import { minToMs, msToMin } from '@src/utils/dateAndTime/dateAndTime'
import { SButton } from '@src/components/forms'
import {
  settingsReset,
  settingsUpdate,
} from '@src/store/settings/settingsActions'
import { TNewSettings } from '@src/store/settings/settingsTypes'
import { TSettingsState } from '@src/store/settings/settingsReducer'
import { selectSettings } from '@src/store/settings/settingsSelectors'

import { IModalProps } from '@shared/ui/Modal/props'
import { Modal } from '@shared/ui'


const serializeStateObjectMsToMin = (stateObj: TSettingsState) => ({
  onePomodoroTime: msToMin(stateObj.onePomodoroTime),
  shortBreakTime: msToMin(stateObj.shortBreakTime),
  longBreakTime: msToMin(stateObj.longBreakTime),
  longBreakInterval: stateObj.longBreakInterval,
  timerEndNotificationEnabled: stateObj.timerEndNotificationEnabled,
})

const TimerSettings: React.FC<IModalProps> =
  ({ isVisible, onClose }) => {
    const dispatch = useDispatch()
    const settings = useSelector(selectSettings)

    const [formInputsState, setFormInputsState] =
      useState(serializeStateObjectMsToMin(settings))

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
      const newSettings: TNewSettings = {
        onePomodoroTime: minToMs(formInputsState.onePomodoroTime),
        shortBreakTime: minToMs(formInputsState.shortBreakTime),
        longBreakTime: minToMs(formInputsState.longBreakTime),
        longBreakInterval: formInputsState.longBreakInterval,
        timerEndNotificationEnabled:
        formInputsState.timerEndNotificationEnabled,
      }
      dispatch(settingsUpdate(newSettings))
      onClose()
    }

    const resetSettings = () => dispatch(settingsReset())


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

    useEffect(() => {
      setFormInputsState(serializeStateObjectMsToMin(settings))
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [settings])

    return (
      <Modal.Modal
        isVisible={isVisible}
        onClose={onClose}
      >
        <Modal.Styles.SModalBody>
          <Modal.Styles.SModalTitle>
            Настройки
          </Modal.Styles.SModalTitle>

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
                type={'button'}
              >
                Отмена
              </SButton>

              <SButton
                color={'focus'}
                type={'button'}
                onClick={resetSettings}
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
        </Modal.Styles.SModalBody>
      </Modal.Modal>
    )
  }

export default TimerSettings