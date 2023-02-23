import styled from 'styled-components'

export const WrapperHeader = styled.header`
    background: transparent;
    vertical-align: middle;
    left: 0;
    right: 0;
    position: relative;
    z-index: 1;
    height: 12vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--width-max-desktop);
    margin: auto;
    #menu-primary > li {
        list-style: none;
        padding: 0 10px;
    }
    #menu-primary {
        display: flex;
        align-items: center;
    }
    @media screen and (min-width: 1025px) and (max-width: 1440px) {
        padding-right: 2.75vh;
        padding-left: 2.75vh;
    }
    height: 7.75rem;
`
export const ListItem = styled.li`
    .menu-link {
        font-size: var(--font-size-xl);
    }
    .color-primary {
        color: ${props => props.color ? props.color : 'var(--color-text-primary)'};
    }
    .color-white-secondary {
        color: ${props => props.color ? props.color : 'var(--color-text-white)'};
        font-weight: 500;
        font-size: var(--font-size-xl);
        line-height: 27px;
    }
`
