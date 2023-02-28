import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Home } from '~/components'

function Icon ({ name, size, color }) {
  return (
    <div className="icon" style={{ fontSize: size, color }}>
      {name}
    </div>
  )
}

Icon.propTypes = {
  color: PropTypes.any,
  name: PropTypes.any,
  size: PropTypes.any
}

export const ViewHome = () => {
  const [position, setPosition] = useState(0)
  const icons = [1, 2, 3, 4, 5]
  function handleScroll (event) {
    if (event.key === 'ArrowLeft' && position > 0) {
      setPosition(position - 1)
    } else if (event.key === 'ArrowRight' && position < icons.length - 1) {
      setPosition(position + 1)
    }
  }
  console.log(position)
  return (
    <>
     <div className="screen" onKeyDown={handleScroll} tabIndex="0">
      {icons.slice(position, position + 5).map((icon, index) => (
        <Icon
          key={index}
          name={icon.name}
          size={icon.size}
          color={icon.color}
        />
      ))}
    </div>
    <Home />
    </>
  )
}
