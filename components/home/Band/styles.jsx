import styled, { css } from 'styled-components'

export const CustomBand = styled.div`
margin: 100px 0;
/* overflow: auto; */
white-space: nowrap;
height: 100%;
text-overflow: ellipsis;
place-content: center;
position: relative;
place-items: center;
position: relative;
display: flex;
height: 80vh;
.content-band {
    background-color: #cee959;
    color: var(--color-base-black);
    font-size: 3em;
    width: 110vw;
    padding: 30px;
    position: absolute;
}
`

export const TextBand = styled.div`
    ${({ rotateZ }) => rotateZ && css`transform: ${`rotateZ(${rotateZ}deg)`};`}
    position: absolute;
    left: -50px;
`
