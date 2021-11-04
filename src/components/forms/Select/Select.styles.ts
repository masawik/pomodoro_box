import styled from 'styled-components'

export const SSelect = styled.select`
  position: relative;
  padding: 15px 19px;
  border: none;
  background-color: ${({ theme: { colors } }) => colors.secondary.light};
  appearance: none;
  background-repeat: no-repeat;
  background-position: 95% center;
  background-image: url("data:image/svg+xml,%3Csvg width='16' height='10' viewBox='0 0 16 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 9L8 2L15 9' stroke='%23B7280F' stroke-width='2'/%3E%3C/svg%3E");

  option {
    padding: 15px 19px;
  }
`