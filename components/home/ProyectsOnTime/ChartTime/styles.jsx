import styled, { css } from 'styled-components'

export const Progress = styled.div`
    position: relative;
    margin: 0 0 32px 0;
    &:last-child {
        margin: 0;
    }
`
export const ProgressBarContainer = styled.div`
    display: flex;
    width: 100%;
    background-color: ${({ backgroundColor }) => backgroundColor || 'var(--color-background-primary)'};
    border: 1px solid ${({ border }) => border ? 'none' : 'var(--color-background-primary)'};
    padding: 8px;
    height: 48px;
    position: relative;
`
export const ProgressBar = styled.div`
    align-items: center;
    background-color: var(--color-background-secondary);
    display: flex;
    height: 100%;
    ${props => props.end
? css`
    right: 0;
    `
: css`
    left: 0;
    `}
    position: absolute;
    top: 0;
    transition: .2s;
    width: ${props => (100 / props.final) * props.progress}%;
`

export const Date = styled.div`
    border-left: 1px solid #525252;
    width: 33.33333%;
    position: relative;
    &:last-child {
        border-right: 1px solid #525252;
    }
    &:last-child > .last {
        width: 100%;
        top: -45px;
        left: 95px;
    }
    .day {
        height: 42px;
        top: -45px;
        left: -15px;
        width: 27px;
        position: absolute;
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
        h3 {
            font-size: 12px;
            font-family: Poppins;
            font-weight: 400;
            line-height: 19.68px;
        }
        span {
            font-family: Poppins;
            font-size: 24px;
            color: var(--color-background-secondary);

        }
    }
`
export const ChartCalendar = styled.div`
    width: 577px;
    height: 284px;
    position: absolute;
    display: flex;
    justify-content: space-between;
`
export const BoxChart = styled.div`
    width: 577px;
    height: 284px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: flex-end
`
