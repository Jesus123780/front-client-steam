import Image from 'next/image'
import React from 'react'
import { dataTech } from '~/mock/dataTech'
import { ContentTech } from './styles'

export const PaymentPlans = () => {
  return (
    <ContentTech>
      {dataTech.listIcon.map((item, index) => {
        return (
          <div key={index}>
            <Image
              alt={''}
              blurDataURL='/images/favicon.png'
              className='store_image'
              width={300}
              height={300}
              src={'/images/favicon.png'}
            />
          </div>
        )
      })}
      <div>

      </div>
    </ContentTech>
  )
}
