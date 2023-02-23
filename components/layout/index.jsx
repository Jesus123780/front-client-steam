import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { CookiesEstrict } from '../CookieModal'
import { Footer } from '../Footer'
import { Header } from '../header'
import { WhatsApp } from '../WaButton'

export const Layout = (props) => {
  const [show] = useState(false)
  return (
    <div>
      <Header />
      {props.children}
      <WhatsApp />
      <Footer />
    { show && <CookiesEstrict />}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.any
}
