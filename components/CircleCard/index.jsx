import PropTypes from 'prop-types'
import React from 'react'
import { Text } from '../Text'
import { Card } from './styles'
import { getGlobalStyle } from '~/utils'
import Link from 'next/link'
import { IconFigma, IconPS, IconXD } from '@/public/Icons'

const iconSet = {
  FIGMA: <IconFigma />,
  XD: <IconXD />,
  PS: <IconPS />
}
export const CircleCard = ({
  children,
  description = 'Lorem ipsum',
  icons,
  index = 1,
  labelLink = '',
  title = 'Title',
  url = '/',
  ...props
}) => {
  return (
    <Card {...props}>
      <div className='card-item'>
        <div className='number-circle'>
          0{index}
        </div>
        <div className='content'>
          <Text
            label={title}
            as='h3'
            margin='33px 0 0 0'
            fontSize={getGlobalStyle('--font-size-titles-xl')}
            align='center'
            color={getGlobalStyle('--color-text-secondary')}
          />
          <Text
            label={description}
            as='h3'
            fontWeight={getGlobalStyle('--font-weight-normal')}
            margin='33px 0 0 0'
            fontSize={getGlobalStyle('--font-size-titles-sm')}
            align='center'
            color={getGlobalStyle('--color-text-secondary')}
          />
        </div>
      </div>

      {labelLink
        ? <Link href={url}>
          <span className='card_url'>
            {labelLink}
          </span>
          </Link>
        : <div className='wrapper_icon'>
           {icons.map((icon, index) => (
            <div className='wrapper_icon' key={index}>
              <div>{iconSet[icon]}</div>
            </div>
           ))}
          </div>
           }
    </Card>
  )
}

CircleCard.propTypes = {
  children: PropTypes.any,
  description: PropTypes.string,
  icons: PropTypes.any,
  index: PropTypes.number,
  labelLink: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.any
}
