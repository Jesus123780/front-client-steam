import styled from 'styled-components'

export const ContainerPlan = styled.div`
    max-width: var(--width-max-desktop);
    margin: auto;
`
export const WarapperPlans = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(max(480px,33%),1fr));
    max-width: var(--width-max-desktop);
    margin: auto;
    justify-content: space-around;
    align-items: center;
    justify-items: stretch;
`

export const SwitchertoggleArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: var(--width-max-desktop);
    margin: 5.625rem auto;
    .content-toggle-title {
        display: flex;
        align-items: center;
        justify-content: center
    }
`
