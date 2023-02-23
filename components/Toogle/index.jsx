import PropTypes from 'prop-types'
import React from 'react'
import {
  CheckBox,
  CheckBoxLabel,
  CheckBoxWrapper,
  WarapperToggle
} from './styles'

export const Toggle = ({
  id = 'toggle-id',
  state = false,
  onChange = () => { }
}) => {
  return (
        <WarapperToggle>
        <CheckBoxWrapper>
            <CheckBox
                id={id}
                type='checkbox'
                defaultChecked={state}
                onChange={onChange}
                />
            <CheckBoxLabel htmlFor={id} state={state}/>
        </CheckBoxWrapper>
    </WarapperToggle>
  )
}

Toggle.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func,
  state: PropTypes.bool
}
