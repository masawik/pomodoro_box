import styled from 'styled-components'

interface StyledButtonProps {
  readonly danger?: boolean
}

export const Button = styled.button<StyledButtonProps>`
  padding: 19px 50px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  background-color: ${props => props.danger ? '#ee735d' : '#a8b64f'};
  transition-duration: .3s;
  transition-property: background-color, color, border-color;
  :hover {
    background-color: ${props => props.danger ? '#dc3e22' : '#899441'};
  }
`

export const TransparentButton = styled(Button)<StyledButtonProps>`
    padding: 17px 48px;
    border: 2px solid ${props => props.danger ? '#ee735d' : '#a8b64f'};
    color: ${props => props.danger ? '#ee735d' : '#a8b64f'};
    background-color: transparent;
    :hover {
      border-color: transparent;
      color: #fff;
      background-color: ${props => props.danger ? '#dc3e22' : '#899441'};
    }
`