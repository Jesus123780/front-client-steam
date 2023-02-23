import styled from 'styled-components'

export const WidgetContainer = styled.div`
    background-color: ${props => props.bgColor || 'var(--color-primary-gray)'};
    border-radius: 1rem;
    height: 700px;
    margin: auto;
    padding: 3.4375rem 2.375rem;
    width: 330px;
    &:nth-child(2) {
        margin-bottom: 1.3125rem;
        width: 502px;
    }
    .pricing-table-headline {
        display: flex;
        justify-content: space-between;
        margin-bottom: 2.25rem;
    }
    .title {
        align-items: center;
        color: ${props => props.center ? 'var(--color-text-primary)' : 'var(--color-text-secondary)'};
        display: flex;
        font-family: 'Poppins';
        font-size: var(--font-size-titles-md);
        font-weight: var(--font-weight-medium);
        line-height: 2.375rem;
    }
    .subtitle {
        color: ${props => props.center ? 'var(--color-text-primary)' : 'var(--color-text-secondary)'};
        font-family: 'Poppins';
        font-size: var(--font-size-md);
        font-weight: var(--font-weight-normal);
        line-height: 1.4375rem;
        text-align: right;
        text-transform: uppercase;
    }
    .titles-typo {
        align-items: flex-end;
        display: flex;
    }
    .date {
        color: ${props => props.center ? 'var(--color-text-primary)' : 'var(--color-text-secondary)'};
        font-family: 'Poppins';
        font-size: 0.9375rem;
        font-weight: var(--font-weight-normal);
        line-height: 25px;
    }
    .pricing-table-recomendation {
        align-items: center;
        background-color: var(--color-background-secondary);
        border-radius: 64px;
        color: var(--color-text-primary);
        display: flex;
        font-family: 'Poppins';
        font-size: var(--font-size-2xs);
        font-weight: var(--font-weight-medium);
        height: 22px;
        justify-content: center;
        margin: 9px 0;
        max-height: 22px;
        min-height: 22px;
        overflow: hidden;
        padding: 7px;
        text-align: center;
        text-transform: uppercase;
        transition: width 0.5s;
        white-space: nowrap;
        width: ${props => props.state ? '120px' : '65px'};
    }
    .pricing-table-details {
        font-family: 'Poppins';
        font-weight: var(--font-weight-normal);
        font-size: 15px;
        line-height: 22px;
        display: flex;
        align-items: center;
        color: ${props => props.center ? 'var(--color-text-primary)' : 'var(--color-text-secondary)'};
        margin: 1.1875rem 0 2.8125rem 0;
    }
    .pricing-table-features {
        margin-top: 46px;
    }
    .price-lits li {
        font-family: 'Poppins';
        font-weight: var(--font-weight-normal);
        font-size: var(--font-size-lg);
        line-height: 1.5rem;
        position: relative;
        letter-spacing: -0.025em;
        color: ${props => props.center ? 'var(--color-text-primary)' : 'var(--color-text-secondary)'};
    }
    .price-lits li::before {
        content: '';
        border-radius: 0.375rem;
        height: 0.75rem;
        width: 0.75rem;
        margin-right: 0.5rem;
        background-color: ${props => props.center ? 'var(--color-text-primary)' : 'var(--color-background-secondary)'};
        position: absolute;
        left: -1.0625rem;
        top: 5px;
    }
`
export const Tag = styled.div`
    font-family: 'Poppins';
    font-weight: var(--font-weight-normal);
    font-size: 12px;
    line-height: 20px;
    margin: 0 15px;
    text-transform: uppercase;
    &::first-letter {
        text-transform: uppercase;
        font-weight: 400;
        font-size: 13px;
    }
`
export const Price = styled.div`
    font-family: 'Poppins';
    color: ${props => props.center ? 'var(--color-text-primary)' : 'var(--color-text-secondary)'};
    font-weight: var(--font-weight-semibold);
    font-size: 2rem;
    font-size: 2rem;
    line-height: 2.375rem;
    display: flex;
    align-items: center;
    position: relative;
    letter-spacing: -0.02em;
    .symbol {
        font-family: 'Poppins';
        font-weight: 400;
        font-size: 15px;
        line-height: 25px;
        top: -5px;
        position: absolute;
        right: -15px;
    }
`
