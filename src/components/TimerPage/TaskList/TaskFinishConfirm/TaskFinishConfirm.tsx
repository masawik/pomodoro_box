import React from 'react'
import Modal from '../../../Modal/Modal'
import { SModalBody, SModalTitle } from '../../../Modal/Modal.styles'
import { SButton } from '../../../forms'
import { STaskFinishConfirmDeleteButton } from './TaskFinishConfirm.styles'

interface ITaskFinishConfirmProps {
  onTaskDelete: () => void,
  onTaskExtension: () => void
}

const TaskFinishConfirm: React.FC<ITaskFinishConfirmProps> =
  ({ onTaskDelete, onTaskExtension }) => {

    return (
      <Modal
        onClose={onTaskDelete}
      >
        <SModalBody>
          <SModalTitle>
            Задача завершена?
          </SModalTitle>

          <STaskFinishConfirmDeleteButton
            onClick={onTaskDelete}
            color={'danger'}
          >
            Да, удалить задачу
          </STaskFinishConfirmDeleteButton>

          <SButton
            onClick={onTaskExtension}
            color={'primary'}
          >
            Нет, добавить ещё 1 помидор
          </SButton>
        </SModalBody>
      </Modal>
    )
  }

export default TaskFinishConfirm