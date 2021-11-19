import React from 'react'
import {
  DayAndTotalTimeTileContainer,
  STileTitle,
} from './Tile.styles'
import { HighlightedText } from '../../typography/highlightedText/HighlightedText.styles'

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

    </DayAndTotalTimeTileContainer>
  )
}

export default DayAndTotalTimeTile