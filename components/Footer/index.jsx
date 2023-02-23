import Image from 'next/image'
import React from 'react'
import { IconInstagram } from '@/public/Icons'
import { WrapperFooter } from './styles'
import CustomMarquee from 'react-fast-marquee'
import { getGlobalStyle } from '~/utils'
import { Text } from '../Text'
import { dataFooter } from '~/mock/dataFooter'
import Link from 'next/link'
import style from './style.module.css'

export const Footer = () => {
  return (
    <WrapperFooter>
      <CustomMarquee
        gradient={false}
        pauseOnClick={true}
        speed={100}
      >
        <div className={style.container}>
          {dataFooter.map((item) => (
            <div className={style.item} key={item.id}>
              <Text
                as='h3'
                color={getGlobalStyle('--color-text-secondary')}
                label={item.title}
                fontSize='8rem'
                margin='136px 0 190px 0'
                fontWeight={getGlobalStyle('--font-weight-light')}
              />
              <div className={style.rectangle}> </div>
            </div>
          ))}
        </div>
      </CustomMarquee>
      <div className='container'>
        <div className='wrapper-first'>
          <Image
            width={156.84}
            height={46}
            alt='Marca Fuerte'
            src='/images/Group 291.png'
            className='img1'
          />
          <Image
            alt='Marca Fuerte'
            width={160}
            height={46}
            src='/images/badge-flag-blue-light-xl 1.png'
            className='img1'
          />
        </div>
        <div className='wrapper-second'>
          <Image
            width={115.22}
            height={82}
            alt='Marca Fuerte'
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            src='/images/logo.png'
          />
          <div className='paragraph'>
            ©{new Date().getFullYear()}
            <Text
              label='Marca Fuerte Subscription Services'
            />
            <Link
              href='/'
            >
              Acuerdo de Servicio
            </Link>
            <Link
              href='/'
            >
              Aviso de Privacidad
            </Link>
          </div>
          <div className='social'>
            <p>
              juvinaojesusd@gmail.com
            </p>
            <div className='social'>
              <IconInstagram />
            </div>
          </div>
        </div>
      </div>

    </WrapperFooter>
  )
}
