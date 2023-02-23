import React from 'react'
import { Text } from '../Text'
import { Form } from './Form'
import { Container } from './styles'

export const Hiring = () => {
  return (
    <Container>
      <div className='content'>
        <Text
          as='h2'
          margin='5.875rem 0 1.25rem 0'
          fontSize='4rem'
          fontWeight='bolder'
          label='Contratación'
        />

        <Text
          as='p'
          margin='94px 0 0 0'
          label='Completa el siguiente formulario y te enviaremos
        el link de pago con stripe y/o datos bancarios'
        />
        <Form />
      </div>
    </Container>
  )
}
