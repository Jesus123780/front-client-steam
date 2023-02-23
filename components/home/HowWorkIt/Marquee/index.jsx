import React from 'react'
import { Text } from '~/components/Text'
import { getGlobalStyle } from '~/utils'
import CustomMarquee from 'react-fast-marquee'
import { Easing, useScroll } from '~/hooks/useScroll'
import style from './Marquee.module.css'

export const Marquee = () => {
  const progress = useScroll({
    ease: Easing.easeInCubic,
    start: '2vh',
    end: '100vh'
  })
  return (
    <CustomMarquee
      gradient={false}
      pauseOnClick={true}
      speed={progress * 100 * 10}
      className={style['marquee-container']}
      pauseOnHover={true}
    >
      <div className={style.container}>
        <div className={style.item}>
          <Text
            as='h3'
            color={getGlobalStyle('--color-secondary-green')}
            label='CÓMO FUNCIONA'
            fontSize='8rem'
            lineHeight='100%'
            fontWeight={getGlobalStyle('--font-weight-light')}
          />
          <div className={style.rectangle}> </div>
        </div>
        <div className={style.item}>
          <Text
            as='h3'
            color={getGlobalStyle('--color-secondary-green')}
            label='CÓMO FUNCIONA'
            fontSize='8rem'
            lineHeight='100%'
            fontWeight={getGlobalStyle('--font-weight-light')}
          />
          <div className={style.rectangle}> </div>
        </div>
      </div>
    </CustomMarquee>
  )
}
