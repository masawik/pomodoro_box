import React from 'react'
import { ReactComponent as SmileTomatoSVG } from '../../../assets/images/smile_tomato.svg'
import { ReactComponent as TomatoSVG } from '../../../assets/images/tomato.svg'
import {
  SPomodoroCountBody,
  SPomodoroCountContainer,
  SPomodoroCountFooter,
} from './Tile.styles'

interface IPomodoroCountTile {
  count: number;
}

const PomodoroCountTile: React.FC<IPomodoroCountTile> = ({ count }) => {
  return (
    <SPomodoroCountContainer>
      {
        count ?
          (
            <SPomodoroCountBody>

              <TomatoSVG/>
              <span>
                x {count}
              </span>

              <SPomodoroCountFooter>
                {count} помидора
              </SPomodoroCountFooter>
            </SPomodoroCountBody>
          )
          :
          (
            <SmileTomatoSVG/>
          )
      }
    </SPomodoroCountContainer>
  )
}

export default PomodoroCountTile