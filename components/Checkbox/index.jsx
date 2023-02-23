import PropTypes from 'prop-types'
import React from 'react'

export const Checkbox = ({ label = 'Marca / Logotipo' }) => {
  return (
        <label className="field">
            <div className="error-hint">
                <div className="error-message"></div>
            </div>
            <input className="js-agreed-to-privacy" name="agreed_to_privacy" type="checkbox" />
            <span className="label-text">
                {label}
            </span>
        </label>
  )
}

Checkbox.propTypes = {
  label: PropTypes.string
}
