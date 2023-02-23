import React from 'react'
import PropTypes from 'prop-types'
import { CardAvantage } from './CardAvantage'
import { Benefits } from './Benefits'

export const Advantage = ({ title = 'AHORRA TIEMPO' }) => {
  const infoarray = [
    {
      id: 1,
      title: 'AHORRA TIEMPO',
      description: 'Al adquirir tu suscripción mensual obtienes un equipo de especialistas visuales UI experimentados y listos para sumergirse en el proceso de diseño de inmediato.'
    },
    {
      id: 2,
      title: 'Ahorra DINERO',
      description: 'Servicio más económico en tareas de diseño UXUI y desarrollo tecnológico para tus proyectos digitales, que si contarás con un equipo propio de UXUI dentro de tu empresa o agencia.'
    },
    {
      id: 3,
      title: 'ENTREGA RÁPIDA',
      description: 'Recibe tu diseño en unos pocos días, de 1 a 22 días hábiles en promedio. Todas las tareas de diseño y/o desarrollo se ejecutarán y entregarán una a una según tus prioridades.'
    },
    {
      id: 4,
      title: 'SIEMPRE EN CONTACTO',
      description: 'Nos mantenemos en contacto contigo con nuestros Product Managers vía Slack para recibir comentarios y nuevos proyectos.'
    }
  ]
  return (
    <div>
      <Benefits/>

      {infoarray.map((hijo, index) => {
        return <CardAvantage {...hijo} key={index} />
      })}
    </div>
  )
}
Advantage.propTypes = {
  title: PropTypes.string
}
