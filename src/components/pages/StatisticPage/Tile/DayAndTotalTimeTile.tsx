import React from 'react'
import {
  DayAndTotalTimeTileContainer,
  STileTitle,
} from './Tile.styles'
import { HighlightedText } from '../../../typography/highlightedText/HighlightedText.styles'
import AnimateContentUpdate
  from '../../../layout/AnimateContentUpdate/AnimateContentUpdate'

interface IDayAndTotalTimeTile {
  dayOfWeek: string,
  totalTime: number
}

const DayAndTotalTimeTile: React.FC<IDayAndTotalTimeTile> = ({
                                                               dayOfWeek,
                                                               totalTime,
                                                             }) => {
  return (
    <DayAndTotalTimeTileContainer>
      <AnimateContentUpdate
        updateKey={dayOfWeek}
      >
        <STileTitle>
          {dayOfWeek}
        </STileTitle>
        {
          totalTime > 0 ?
            (
              <span>
              Вы работали над задачами в&nbsp;течении&nbsp;
                <HighlightedText>
                {totalTime} минут
              </HighlightedText>
            </span>
            )
            :
            (
              <span>
              Нет данных
            </span>
            )
        }
      </AnimateContentUpdate>
    </DayAndTotalTimeTileContainer>
  )
}

export default DayAndTotalTimeTile