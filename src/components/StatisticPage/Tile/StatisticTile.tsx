import React from 'react'
import { SStatisticTile, STileTitle } from './Tile.styles'
import { IColors } from '../../../utils/constants/themes.constants'

interface IStatisticTile {
  title: string,
  color?: keyof IColors,
  text: string,
  svg?: JSX.Element
}

const StatisticTile: React.FC<IStatisticTile> = ({
                                                   svg,
                                                   title,
                                                   color = 'secondary',
                                                   text,
                                                 }) => {
  return (
    <SStatisticTile color={color}>
      <STileTitle>
        {title}
      </STileTitle>
      <span>
        {text}
      </span>
      {svg}
    </SStatisticTile>
  )
}

export default StatisticTile