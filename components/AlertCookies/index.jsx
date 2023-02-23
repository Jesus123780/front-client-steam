import { IconClose } from '@/public/Icons'
import React, { useContext } from 'react'
import { Context } from '~/context/Context'
import { getGlobalStyle } from '~/utils'
import { Button } from '../Button'
import { Text } from '../Text'
import { ContentToast } from './styled'

export const AlertCookies = () => {
  const { handleSetCookie } = useContext(Context)
  return (
    <ContentToast>
      <div className='alert'>
        <Text
          fontSize='0.8125rem'
          color={getGlobalStyle('--color-text-primary')}
          label='Este sitio utiliza Cookies para mejorar tu experiencia.'
        />
        <Button backgroundColor={getGlobalStyle('--color-base-transparent')} label='Preferencas' />
        <Button
          width='8.875rem'
          height='4.125rem'
          border=''
          style={{ borderRadius: '3.125rem' }}
          label='Rechazar todo'
        />
        <Button
          width='8.875rem'
          label='Aceptar todo'
          height='4.125rem'
          border=''
          color={getGlobalStyle('--color-text-white')}
          style={{ borderRadius: '3.125rem' }}
          backgroundColor={getGlobalStyle('--color-text-primary')}
        />
        <Button
          width='2.4375rem'
          height='2.4375rem'
          border=''
          style={{ borderRadius: '3.125rem' }}
          backgroundColor={'#E0E0E0'}
          onClick={() => handleSetCookie()}
          icon={<IconClose />}
        />
      </div>
    </ContentToast>
  )
}
