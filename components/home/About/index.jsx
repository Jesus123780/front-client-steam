import { IconArrowDiagonalTop, IconDoots } from '@/public/Icons'
import React, { useRef } from 'react'
import { Button } from '~/components/Button'
import { Text } from '~/components/Text'
import { useIntersectionObserver } from '~/hooks/useIntersection'
import { getGlobalStyle } from '~/utils'
import { ContentAbout } from './styles'

export const About = () => {
  const ref = useRef(null)
  const { onScreen } = useIntersectionObserver({
    el: ref,
    disconnect: false,
    active: true,
    onEnter: () => {
    },
    out: () => {
    }
  })
  return (
    <ContentAbout id='about' ref={ref}>
      {onScreen && <>
      <div className='heading-title'>
        <div className='heading-title__wrapper'>
          <div className='heading-box__title'>
            <Button
              width='12.75rem'
              label=''
              height='4.125rem'
              border=''
              margin='0 10px 0 0'
              icon={<IconArrowDiagonalTop color={getGlobalStyle('--color-icons-primary')} size={21} />}
              style={{ borderRadius: '50px' }}
              backgroundColor={getGlobalStyle('--color-secondary-green')}
            />
            <Text
              align='center'
              color={getGlobalStyle('--color-text-white')}
              fontSize='3.75rem'
              margin='0 10px 0 0'
              label='SOMOS LA AGENCIA'
            />
          </div>
          <IconDoots />
        </div>

      </div>

      <div className='heading-title'>
        <Text
          align='center'
          color={getGlobalStyle('--color-text-white')}
          fontSize='3.75rem'
          label='DE LAS OPORTUNIDADES, BIENVENIDO'
        />
      </div>

      <div className='heading-title'>
        <div className='heading-title__wrapper'>
          <div>
            <Text
              as='h2'
              align='center'
              color={getGlobalStyle('--color-text-white')}
              fontSize='0.9375rem'
              label='Sitios web de alto nivel, apps de alto impacto, redes'
            />
            <Text
              as='h2'
              align='center'
              color={getGlobalStyle('--color-text-white')}
              fontSize='0.9375rem'
              label='sociales y marcas para clientes valientes y ambiciosos.'
            />
          </div>
          <Text
            as='h2'
            align='center'
            color={getGlobalStyle('--color-text-white')}
            fontSize='3.75rem'
            label='HOY A MARCA FUERTE'
          />
          <Button
            width='10rem'
            label='BENEFICIOS'
            height='2.5rem'
            border=''
            style={{ borderRadius: '50px' }}
            backgroundColor={'#d9d9d9'}
          />
        </div>

      </div>
      </>}
    </ContentAbout>
  )
}
