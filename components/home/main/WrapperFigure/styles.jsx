import styled, { css } from 'styled-components'

export const ContainerFigure = styled.div`
    -webkit-border-radius: 200px 0px 0px 200px;
    -moz-border-radius: 200px 0px 0px 200px;
    border-radius: 200px 0px 0px 200px;
    height: 24.375rem;
    transition: 0.5s ease;
    overflow: hidden;
    background-color: var(--color-primary-gray);
    position: absolute;
    max-width: 100%;
    ${({ left }) => left && css`
    left: ${left};
    transform: rotate(180deg);
    bottom: 25px;
    width: 824px;
    left: -296px;
    && img {
        transform: rotate(180deg);
    }
    `}
    ${({ right }) => right && css`
    right: ${right};
    width: 660px;
    top: calc(13.1875rem - 7.75rem);
    `}
    img {
        width: auto !important;
    }
    `
