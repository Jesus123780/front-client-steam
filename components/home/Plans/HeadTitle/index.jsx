import { IconDoots } from '@/public/Icons'
import React from 'react'
import { SectionSubtitle, SectionTititle } from './styles'

export const HeadTitle = () => {
  return (
        <div>
            <SectionTititle>
                <div className='content_icon'>
                    <IconDoots />
                </div>
                <SectionSubtitle>
                    <span>CONOCE </span>
                    <span>NUESTROS PLANES</span>
                    <span>DISPONIBLES</span>
                </SectionSubtitle>
            </SectionTititle>
        </div>
  )
}
