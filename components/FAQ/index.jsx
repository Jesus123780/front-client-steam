import React, { useState } from 'react'
import { Options } from '../Acordion/Options'
import { Text } from '../Text'
import { dataFQA } from '../../mock/dataFQA'
import { IconArrowDiagonalTop } from '@/public/Icons'
import { getGlobalStyle } from '~/utils'
import { Button } from '../Button'
import { ContentAcordion, ContentFQA } from './styles'
import styles from './style.module.css'

export const FAQ = () => {
  const [show, setShow] = useState(false)
  // eslint-disable-next-line
  function handleClick(index) {
    setShow(index === show ? false : index)
  }

  return (
    <ContentFQA id='faq'>
      <div className={styles.container}>
        <div className={styles.FAQ}>
          <h2 className={styles.title}>
            FAQ
          </h2>
          <h2 className={styles.title_secundario}>
            PREGUNTAS
            FRECUENTES
          </h2>
        </div>
        <div className={styles['wrap-box']}>
          <div className={styles.box}>
            <p>
              Te acercamos las preguntas más frecuentes que hacen nuestros clientes.
              En caso que estas respuestas
              no despejen tus dudas contáctanos, uno de nuestros asesores te atenderá.
            </p>
          </div>
          <div className={styles.box}>
            <Button
              label='SOLICITAR ASESORÍA'
              onClick={() => { }}
              backgroundColor={getGlobalStyle('--color-base-black')}
              borderRadius='12.5rem'
              padding='1.875rem 3.5rem'
              fontWeight={getGlobalStyle('--font-weight-normal')}
              fontFamily='Poppins'
              lineHeight='1.75rem'
              color={getGlobalStyle('--color-text-white')}
            />
          </div>
        </div>
        {dataFQA?.map((m, i) => {
          return (
            <Options
              active={show === i}
              handleClick={() => { return handleClick(i) }}
              index={i}
              key={m.id}
              label={m.title}
              path={null}
              icon={<IconArrowDiagonalTop />}
            >
              <ContentAcordion>
              <Text
                as='p'
                align='start'
                fontWeight={getGlobalStyle('--font-weight-normal')}
                fontSize={getGlobalStyle('--font-size-xl')}
                color={'#545454'}
                label={m.description}
              >
              </Text>
              </ContentAcordion>
            </Options>
          )
        })}
      </div>

    </ContentFQA>

  )
}
