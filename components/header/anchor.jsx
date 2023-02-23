import PropTypes from 'prop-types'
import Link from 'next/link'
import React from 'react'
import { ListItem } from './styles'

export const Anchor = ({
  title = 'Home',
  url = '/',
  type = 'primary',
  ...props
}) => {
  return (
        <ListItem
        id='nav-menu-item'
        {...props}
        >
            <Link href={url} scroll={false}>
                <span className={`menu-link color-${type}`}>{title}</span>
            </Link>
        </ListItem>
  )
}

Anchor.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  url: PropTypes.string
}
