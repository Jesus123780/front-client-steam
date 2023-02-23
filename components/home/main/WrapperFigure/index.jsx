import Image from 'next/image'
import PropTypes from 'prop-types'
import React from 'react'
import { ContainerFigure } from './styles'

export const WrapperFigure = ({ left, right, ...rest }) => {
  return (
    <ContainerFigure left={left} right={right} {...rest}>
      <Image
        priority
        fill
        sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
        alt="Picture of the author"
        style={{ objectFit: 'cover' }}
        src={right ? '/images/rectangle_left.jpg' : '/images/rectangle_right.png'}
      />
    </ContainerFigure>
  )
}

WrapperFigure.propTypes = {
  left: PropTypes.string,
  right: PropTypes.string
}
