import PropTypes from 'prop-types'
import Image from 'next/image'
import React from 'react'
import styled, { css } from 'styled-components'
import { float, floatShadow } from '~/animations'

export const Cube = ({
  center,
  end,
  margin = '10',
  style
}) => {
  return (
        <ContainerCube style={style} center={center} end={end} margin={margin}>
            <div className='float-cube'>
                <Image
                    alt='Cube'
                    height={168.19}
                    src="/images/Cube.png"
                    width={181.44}
                />
                <div className="shadow"></div>
            </div>
        </ContainerCube>
  )
}

Cube.propTypes = {
  center: PropTypes.bool,
  end: PropTypes.any,
  margin: PropTypes.string,
  style: PropTypes.any
}

const ContainerCube = styled.div`
    margin: ${({ margin }) => margin || 'auto'};
    max-width: var(--width-max-desktop);
    display: flex;
    ${props => props.center && css`
    justify-content: center;
    `}
    ${props => props.end && css`
        justify-content: flex-end;
    `}
 .float-cube {
    animation-name: ${float};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: ease;
    position: relative;
    width: min-content;

 }
 .shadow {
    width: 80%;
    margin: 31px auto 0 auto;
    height: 8px;
    border-radius: 100%;
    background-color: rgba(0, 0, 0, 0.17);
    animation-name: ${floatShadow};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: ease;
 }
`
