import React from 'react'
import { SStatisticTile, STileTitle } from './Tile.styles'
import AnimateContentUpdate
  from '../../layout/AnimateContentUpdate/AnimateContentUpdate'
import { IColors } from '../../../theme/themeTypes'

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
      <AnimateContentUpdate updateKey={text}>
        <STileTitle>
          {title}
        </STileTitle>
        <span>
        {text}
      </span>
      </AnimateContentUpdate>
      {svg}
    </SStatisticTile>
  )
}

export default StatisticTile