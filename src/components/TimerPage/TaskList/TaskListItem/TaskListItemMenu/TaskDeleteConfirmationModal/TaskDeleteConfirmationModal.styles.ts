import styled, { css } from 'styled-components'
import { SButton } from '../../../../../forms'

export const STaskDeleteModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const STaskDeleteModalTitle = styled.div`
  font-size: 24px;
  ${({ theme: { textColor } }) => css`
    color: ${textColor};
  `}
`

export const STaskDeleteModalDeleteButton = styled(SButton)`
  margin: 25px 0 10px;
`