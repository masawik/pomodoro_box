import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

export const SModalWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, .5);

  body {
    overflow-y: hidden;
  }
`

export const SModalContainer = styled(motion.div)`
  position: relative;
  min-width: 350px;
  min-height: 175px;
  padding: 25px;
  ${({ theme: { backgroundColor } }) => css`
    background-color: ${backgroundColor};
  `}
`

export const SModalCloseBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  border: none;
  background: none;
  padding: 20px 14px;
  cursor: pointer;

  ::before, ::after {
    display: block;
    content: '';
    width: 16px;
    height: 3px;
    ${({ theme: { colors } }) => css`
      background-color: ${colors.secondary.normal};
    `}
  }

  ::before {
    transform: rotate(45deg);
  }

  ::after {
    transform: rotate(135deg) translate(-2px, 2px);
  }
`

export const SModalTitle = styled.div`
  font-size: 24px;
  ${({ theme: { textColor } }) => css`
    color: ${textColor};
  `}
`

export const SModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`