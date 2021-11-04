import React from 'react'
import SH1 from '../../typography/H1/H1.styles'
import { SUl } from '../../typography/List/List.styles'
import { InstructionLi } from './Instruction.styles'

const InstructionListContent = [
  'Выберите категорию и напишите название текущей задачи',
  'Запустите таймер («помидор»)',
  'Работайте пока «помидор» не прозвонит',
  'Сделайте короткий перерыв (3-5 минут)',
  'Продолжайте работать «помидор» за «помидором», пока задача не будут ' +
  'выполнена. Каждые 4 «помидора» делайте длинный перерыв (15-30 минут).',
].map((li, index) => (
  <InstructionLi key={`_${index}`}>{li}</InstructionLi>
))

const Instruction = () => {
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