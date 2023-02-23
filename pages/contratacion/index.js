import React from 'react'
import { Hiring } from '~/components/Hiring'

const Contratacion = () => {
  return (
    <div>
        <Hiring />
    </div>
  )
}

export default Contratacion

Contratacion.getLayout = (page) => {
  return (
      <div>
        {page}
      </div>
  )
}
