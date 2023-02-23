import PropTypes from 'prop-types'
import React from 'react'
import { CustomText } from './styles'

export const Text = ({
  label,
  color,
  fontSize,
  align,
  fontWeight,
  lineHeight,
  fontFamily,
  padding,
  opacity,
  as,
  ...props
}) => {
  return (
    <CustomText
      {...props}
      align={align}
      lineHeight={lineHeight}
      fontWeight={fontWeight}
      opacity={opacity}
      padding={padding}
      as={as}
      color={color}
      fontSize={fontSize}
    >
      {label}
    </CustomText>
  )
}

Text.propTypes = {
  align: PropTypes.any,
  as: PropTypes.any,
  color: PropTypes.any,
  fontFamily: PropTypes.any,
  fontSize: PropTypes.any,
  fontWeight: PropTypes.any,
  label: PropTypes.any,
  lineHeight: PropTypes.any,
  opacity: PropTypes.any,
  padding: PropTypes.any
}
