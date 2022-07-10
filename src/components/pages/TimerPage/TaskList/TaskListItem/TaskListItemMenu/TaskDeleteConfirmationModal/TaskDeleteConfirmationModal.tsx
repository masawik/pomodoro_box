import React from 'react'
import Modal from '../../../../../../Modal/Modal'
import {
  STaskDeleteModalDeleteButton,
} from './TaskDeleteConfirmationModal.styles'
import { SUnderlinedButton } from '../../../../../../forms/Button/Button.styles'
import { SModalBody, SModalTitle } from '../../../../../../Modal/Modal.styles'

interface ITaskDeleteConfirmationModalProps {
  onClose: () => void
  onDelete: () => void
  isVisible: boolean
}

const TaskDeleteConfirmationModal: React.FC<ITaskDeleteConfirmationModalProps> =
  ({ onClose, onDelete, isVisible }) => {
    return (
      <Modal
        isVisible={isVisible}
        onClose={onClose}
      >
        <SModalBody>
          <SModalTitle>
            Удалить задачу?
          </SModalTitle>

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
        </SModalBody>
      </Modal>
    )
  }

export default TaskDeleteConfirmationModal