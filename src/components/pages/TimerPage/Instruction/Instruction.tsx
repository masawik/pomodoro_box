import React from 'react'
import SH1 from '../../../typography/H1/H1.styles'
import { SUl } from '../../../typography/List/List.styles'
import { InstructionLi } from './Instruction.styles'
import { useSelector } from 'react-redux'
import { msToMin } from '../../../../utils/dateAndTime'
import { selectSettings } from '../../../../store/settings/settingsSelectors'


const Instruction = () => {
  const settings = useSelector(selectSettings)
  const {
    shortBreakTime,
    longBreakTime,
    longBreakInterval,
  } = settings

  const InstructionListContent = [
    'Выберите категорию и напишите название текущей задачи',
    'Запустите таймер («помидор»)',
    'Работайте пока «помидор» не прозвонит',
    `Сделайте короткий перерыв (${msToMin(shortBreakTime)} минут)`,
    'Продолжайте работать «помидор» за «помидором», пока задача не будут ' +
    `выполнена. Каждые ${longBreakInterval} «помидора» делайте длинный перерыв (${msToMin(longBreakTime)} минут).`,
  ].map((li, index) => (
    <InstructionLi key={`_${index}`}>{li}</InstructionLi>
  ))

  return (
    <>
      <SH1>Ура! Теперь можно начать работать:</SH1>
      <SUl>
        {InstructionListContent}
      </SUl>
    </>
  )
}

export default Instruction