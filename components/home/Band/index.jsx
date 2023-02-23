import PropTypes from 'prop-types'
import React from 'react'
import { CustomBand, TextBand } from './styles'
import Marquee from 'react-fast-marquee'

export const Band = () => {
  return (
    <CustomBand >
      <TextMotionEffect
        rotateZ='349'
        text='UXUI APPS DESIGN LANDINGS HTML UXUI APPS DESIGN LANDINGS HTML'
        direction='right'
      />
      <TextMotionEffect rotateZ='10' text='WEB WORDPRESS CSS+JS JAVA WEB WORDPRESS CSS+JS JAVA' />
    </CustomBand>
  )
}

const TextMotionEffect = ({
  direction = 'left',
  rotateZ,
  text
}) => {
  return (
    <TextBand rotateZ={rotateZ} className='content-band'>
      <Marquee
        direction={direction}
        gradient={false}
      >{text}</Marquee>
    </TextBand>
  )
}

TextMotionEffect.propTypes = {
  direction: PropTypes.string,
  rotateZ: PropTypes.string,
  text: PropTypes.any
}
