import React from 'react'
import { ReactComponent as SmileTomatoSVG } from '../../../assets/images/smile_tomato.svg'
import { ReactComponent as TomatoSVG } from '../../../assets/images/tomato.svg'
import {
  SPomodoroCountBody,
  SPomodoroCountContainer,
  SPomodoroCountFooter,
} from './Tile.styles'
import AnimateContentUpdate
  from '../../layout/AnimateContentUpdate/AnimateContentUpdate'

interface IPomodoroCountTile {
  count: number;
}


const PomodoroCountTile: React.FC<IPomodoroCountTile> = ({ count }) => {
  return (
    <SPomodoroCountContainer>
      <AnimateContentUpdate updateKey={count}>
        {
          count ?
            (
              <SPomodoroCountBody>
                <TomatoSVG />

                <span>x {count}</span>

                <SPomodoroCountFooter>
                  {count} помидор(ов)
                </SPomodoroCountFooter>
              </SPomodoroCountBody>
            )
            :
            (
              <SmileTomatoSVG />
            )
        }
      </AnimateContentUpdate>
    </SPomodoroCountContainer>

  )
}

export default PomodoroCountTile