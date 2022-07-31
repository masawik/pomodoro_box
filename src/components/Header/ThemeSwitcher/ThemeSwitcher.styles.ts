import styled, { css } from 'styled-components'
import moonIMG from '../../../shared/assets/images/theme_switcher/moon.png'
import sunIMG from '../../../shared/assets/images/theme_switcher/sun.png'

interface ISThemeSwitchButtonProps {
  btnTheme: 'sun' | 'moon'
}

export const SThemeSwitchButton = styled.button<ISThemeSwitchButtonProps>`
  margin-left: auto;
  margin-right: 30px;

  cursor: pointer;

  border: none;
  background-color: transparent;
  height: 40px;
  width: 40px;

  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  transition-property: filter;
  transition-duration: 300ms;

  ${({ btnTheme }) => css`
    background-image: url(${btnTheme === 'moon' ? moonIMG : sunIMG});

    :hover {
      filter: drop-shadow(0px 0px 10px ${btnTheme === 'moon' ? '#000' : '#ffe7ab'});
    }
  `}

`