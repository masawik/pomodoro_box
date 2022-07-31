import React, { useEffect } from 'react'
import { SModalBody, SModalTitle } from '../../../../shared/ui/Modal/styles'
import { SButton } from '../../../../components/forms'
import Modal from '../../../../shared/ui/Modal'
// @ts-ignore
import alarmSound from '../../../../shared/assets/sounds/alarm.mp3'
import useSound from 'use-sound'
import { ETimerModes } from '../../../../store/timer/timerReducer'

interface ITimerFinishNotificationProps {
  isVisible: boolean
  onClose: () => void
  timerMode: ETimerModes
}

const TimerFinishNotification: React.FC<ITimerFinishNotificationProps> =
  ({ isVisible, onClose, timerMode }) => {
    const [playNotificationSound,
      { stop: stopNotificationSound }] = useSound(alarmSound)

    const close = () => {
      stopNotificationSound()
      onClose()
    }

    useEffect(() => {
      isVisible && playNotificationSound()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isVisible])

    const finishNotificationText =
      timerMode === ETimerModes.WORK
        ? 'Перерыв окончен('
        : 'Помидор завершен, время отдохнуть!'

    return (
      <Modal
        isVisible={isVisible}
        onClose={close}
      >
        <SModalBody>
          <SModalTitle>
            {finishNotificationText}
          </SModalTitle>

          <SButton
            style={{ marginTop: '20px' }}
            color={'primary'}
            onClick={close}
          >ОК</SButton>
        </SModalBody>
      </Modal>
    )
  }

export default TimerFinishNotification