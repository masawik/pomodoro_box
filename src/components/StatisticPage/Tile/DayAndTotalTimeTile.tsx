import React from 'react'
import { STileContainer, STileText, STileTitle } from './Tile.styles'
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
            <STileText>
              Вы работали над задачами в&nbsp;течении&nbsp;
              <HighlightedText>
                {totalTime} минуты
              </HighlightedText>
            </STileText>
          )
          :
          (
            <STileText>
              Нет данных
            </STileText>
          )
      }

    </STileContainer>
  )
}

export default DayAndTotalTimeTile