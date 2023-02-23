import styled from 'styled-components'

export const Card = styled.div`
    height: 25rem;
    width: 25rem;
    max-width: 100%;
    min-width: 25rem;
    border: 0.5px solid #525252;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    .card-item {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        place-items: center;
    }
    .content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        place-items: center;

    }
    .number-circle {
        width: 44px;
        display: flex;
        place-content: center;
        place-items: center;
        height: 44px;
        line-height: 28px;
        color: var(--color-text-primary);
        font-size: var(--font-size-2xl);
        border-radius: 50%;
        font-weight: var(--font-weight-medium);
        background-color: var(--color-background-secondary);
    }
    .card_url {
        color: var(--color-secondary-green);
        font-style: normal;
        font-weight: var(--font-weight-medium);
        font-size: var(--font-size-lg);
        line-height: 1.5rem;
        letter-spacing: -0.01em;
        font-family: Poppins;
    }
    .wrapper_icon {
        display: flex;
        flex-direction: row;
        width: 179px;
        flex-wrap: nowrap;
        justify-content: center;
    }
`
