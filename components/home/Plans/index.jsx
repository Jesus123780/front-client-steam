import React, { useState } from 'react'
import { Text } from '~/components/Text'
import { Toggle } from '~/components/Toogle'
import { dataPlans } from '~/mock/dataPlans'
import { Card } from './Card'
import { ContainerPlan, SwitchertoggleArea, WarapperPlans } from './styles'
import { getGlobalStyle } from '~/utils'
import { HeadTitle } from './HeadTitle'

export const Plans = () => {
  const [check, setCheck] = useState(false)
  const handleChange = (e) => {
    const { checked } = e.target
    setCheck(checked)
  }
  return (
    <ContainerPlan>
    <HeadTitle />
      <SwitchertoggleArea>
        <Text
          fontSize={getGlobalStyle('--font-size-2xl')}
          color={getGlobalStyle('--color-text-secondary')}
          label='Elige el plan que mejor se adecue a tí o a tu proyecto'
        />
        <div className='content-toggle-title'>
          <Text
            margin='12px 30px 0 0'
            fontSize={getGlobalStyle('--font-size-2xl')}
            color={getGlobalStyle('--color-text-secondary')}
            label='Mensual'
          />
            <Toggle
              state={check}
              onChange={handleChange}
            />
          <Text
            margin='12px 30px 0 60px'
            fontSize={getGlobalStyle('--font-size-2xl')}
            color={getGlobalStyle('--color-text-secondary')}
            label='Trimestral'
          />
        </div>
      </SwitchertoggleArea>
      <WarapperPlans>
        {dataPlans.map((item, index) => (
          <Card key={index} state={check} {...item} />
        ))}
      </WarapperPlans>
    </ContainerPlan>
  )
}
