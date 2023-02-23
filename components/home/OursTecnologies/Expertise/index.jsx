import Image from 'next/image'
import React from 'react'
import { Text } from '~/components/Text'
import { getGlobalStyle } from '~/utils'
import {
  Figure,
  Section,
  WidgetWrap
} from './styles'

export const Expertice = () => {
  return (
    <Section>
      <WidgetWrap>
        <Figure>
          <Image
            layout='fill'
            alt="Picture of the author"
            style={{ objectFit: 'contain' }}
            src='/images/expertise.jpg'
          />|
        </Figure>
      </WidgetWrap>
      <WidgetWrap>
        <Text
          label='NUESTRO EXPERTISE'
          as='h3'
          fontSize={getGlobalStyle('--font-size-titles-md')}
          color={getGlobalStyle('--color-secondary-green')}

        />
        <h2 className='section-subtitle'>
          <span>SOLUCIONES &</span><br />
          <span>LO ÚLTIMO EN </span><br />
          <span>TECNOLOGÍA</span><br />
        </h2>
      </WidgetWrap>
    </Section>
  )
}
