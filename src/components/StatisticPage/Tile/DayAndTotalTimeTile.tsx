import React from 'react'
import { STileContainer, STileTitle } from './Tile.styles'
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
    <STileContainer>
      <STileTitle>
        {dayOfWeek}
      </STileTitle>
      {
        totalTime > 0 ?
          (
            <span>
              Вы работали над задачами в&nbsp;течении&nbsp;
              <HighlightedText>
                {totalTime} минуты
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

    </STileContainer>
  )
}

export default DayAndTotalTimeTile