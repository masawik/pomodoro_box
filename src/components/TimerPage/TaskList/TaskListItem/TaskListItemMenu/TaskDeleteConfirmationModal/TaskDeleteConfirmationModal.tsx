import React from 'react'
import Modal from '../../../../../Modal/Modal'
import {
  STaskDeleteModalBody, STaskDeleteModalDeleteButton,
  STaskDeleteModalTitle,
} from './TaskDeleteConfirmationModal.styles'
import { SUnderlinedButton } from '../../../../../forms/Button/Button.styles'

interface ITaskDeleteConfirmationModalProps {
  onClose: () => void
  onDelete: () => void
}

const TaskDeleteConfirmationModal: React.FC<ITaskDeleteConfirmationModalProps> =
  ({ onClose, onDelete }) => {
    return (
      <Modal
        onClose={onClose}
      >
        <STaskDeleteModalBody>
          <STaskDeleteModalTitle>
            Удалить задачу?
          </STaskDeleteModalTitle>

          <STaskDeleteModalDeleteButton
            color={'danger'}
            onClick={onDelete}
          >
            Удалить
          </STaskDeleteModalDeleteButton>

          <SUnderlinedButton
            onClick={onClose}
          >
            Отмена
          </SUnderlinedButton>
        </STaskDeleteModalBody>
      </Modal>
    )
  }

export default TaskDeleteConfirmationModal