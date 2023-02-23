import { keyframes } from 'styled-components'

export const float = keyframes`
    to {
        top: 0;
    } from {
        top: 30px;
    }
`

export const floatShadow = keyframes`
    to {
        top: 0;
    } from {
        top: 30px;
    }
`

export const opacityTransition = keyframes`
    to {
        opacity: 0;
    } from {
        opacity: 1;
    }
`

export const transformText = keyframes`
    0% {opacity: 0; transform: translateY(-100px) skewY(10deg) skewx(10deg) rotateZ(360deg); filter: blur(10px); }
    15% {opacity: 1; transform: translateY(0) skewY(0deg) skewx(0deg) rotateZ(0deg); filter: blur(0px);}
`
