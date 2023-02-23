import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { transformText } from '~/animations'

export const TextAnimation = ({ text = 'React' }) => {
  const reactArray = `${text}`.split('')
  return (
        <Wrapper>
                {reactArray?.map((item, index) => (
                    <span key={index}>{item}</span>
                ))}
        </Wrapper>
  )
}

TextAnimation.propTypes = {
  text: PropTypes.string
}

const Wrapper = styled.span`
    position: relative;
    display: inline-block;
    span {
    display: inline-block;
    animation: ${transformText} 7s ease;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    animation-fill-mode: forwards;
    }
    span:nth-child(1){
        animation-delay: 0.1s;
    }
    span:nth-child(2){
        animation-delay: 0.2s;
    }
    span:nth-child(3){
        animation-delay: 0.3s;
    }
    span:nth-child(4){
        animation-delay: 0.4s;
    }
    span:nth-child(5){
        animation-delay: 0.6s;
    }
    span:nth-child(6){
        animation-delay: 0.7s;
    }
    span:nth-child(7){
        animation-delay: 0.9s;
    }
    span:nth-child(8){
        animation-delay: 0.10s;
    }
    span:nth-child(9){
        animation-delay: 0.11s;
    }
    span:nth-child(10){
        animation-delay: 0.12s;
    }
`
