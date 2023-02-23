import styled from 'styled-components'

export const Section = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: var(--width-max-desktop);
    margin: 282px auto;
`

export const WidgetWrap = styled.div`
    width: 50%;
    justify-content: center;
    align-items: center;
    margin: auto;
    .section-subtitle {
        font-family: 'Poppins';
        font-style: normal;
        color: var(--color-text-secondary);
        font-weight: 300;
        font-size: 5rem;
        line-height: 90px;
        text-transform: uppercase;
        margin: 0;
    }
    & span {
        display: inline-block;
    }
    & span:nth-child(3) {
        transform: translateX(-80px);
    }
`

export const Figure = styled.div`
    width: 510px;
    height: 235px;
    position: relative;
    border-radius: 200px;
`
