import Image from 'next/image'
import React from 'react'
import { Cube } from '../Cube'
import { ChartTime } from './ChartTime'
import {
  Box,
  SectionSubtitle,
  WrapperProyectsOnTime
} from './styles'

export const ProyectsOnTime = () => {
  return (
        <div style={{ height: '1633.6px' }}>
            <Cube center={true} />
            <WrapperProyectsOnTime>
                <Box>
                    <SectionSubtitle>
                        <span>PROYECTOS </span>
                        <span>& EL TIEMPO,</span>
                        <span>IMPORTANCIA</span>
                    </SectionSubtitle>
                </Box>
                <Box right>
                    <Image
                        width={181.44}
                        alt='Cube'
                        height={168.19}
                        src="/images/reloj.png"
                    />
                </Box>
            </WrapperProyectsOnTime>

            <WrapperProyectsOnTime>
                <Box>
                <ChartTime />
                </Box>
                <Box right>
                   <p>
                   Es importante aclarar que cada petición o tarea que nos solicites serán realizadas una a una según la prioridad que establezcas.  En cada tarea  estipularemos sobre Trello el tiempo que llevará realizar dichas peticiones.
                   </p>
                   <p>
                   Si el tiempo que hayas adquirido bajo Suscripción no es suficiente para realizar todas tus peticiones deberás adquirir una nueva suscripción mensual o bien, una suscripción trimestral.
                   </p>
                </Box>
            </WrapperProyectsOnTime>
        </div>
  )
}
