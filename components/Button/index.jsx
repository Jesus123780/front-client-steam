import PropTypes from 'prop-types'
import React from 'react'
import { CustomButton } from './styles'

export const Button = ({
  cursor,
  icon,
  label = '',
  style,
  onClick = () => { },
  ...props
}) => {
  return (
    <CustomButton {...props} style={style} >
      {icon}
      {label}
    </CustomButton>
  )
}

Button.propTypes = {
  backgroundColor: PropTypes.any,
  cursor: PropTypes.string,
  icon: PropTypes.any,
  label: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.any
}
