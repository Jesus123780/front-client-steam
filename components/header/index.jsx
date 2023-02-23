import Image from 'next/image'
import React from 'react'
import { NavigationList } from '~/constants'
import { Button } from '../Button'
import { Anchor } from './anchor'
import { WrapperHeader } from './styles'
import { getGlobalStyle } from '~/utils'
import { IconHamBurger } from '@/public/Icons'

export const Header = () => {
  return (
    <WrapperHeader className='left-part'>
      <div>
        <div>
          <Image
            width={115.22}
            height={82}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            alt='Marca Fuerte'
            src='/images/logo.png'
          />
        </div>
      </div>
      <div className='right-part'>
        <nav className='nav with-mobile-menu visible' id='site-navigation' >
          <div id='mega-menu-wrap'>
            <ul id="menu-primary" className="menu">
              {NavigationList.map((item, index) => <Anchor type='white-secondary' key={index} {...item} />)}
              <Anchor
                color={getGlobalStyle('--color-secondary-green')}
                title='LET´S TALK'
                type='white-secondary'
              />
              <Button
                backgroundColor={getGlobalStyle('--color-secondary-green')}
                borderRadius='3.125rem'
                height='3.75rem'
                icon={<IconHamBurger />}
                margin='0 0 0 30px'
                width='3.75rem'
              />
            </ul>
          </div>
        </nav>
      </div>
    </WrapperHeader>
  )
}
