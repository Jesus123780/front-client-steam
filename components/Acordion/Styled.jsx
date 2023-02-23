import styled, { css } from 'styled-components'
import Link from 'next/link'

export const Span = styled.span`
    color: ${props => !props.active ? 'var(--color-text-primary)' : 'var(--color-text-secondary)'};
    font-weight: 500;
    display: block;
    font-size: 18px;
    font-family: Poppins;
`
export const LinkOption = styled(Link)`
    display: block;
    text-decoration: none;
    font-size: 12px;
    padding: 5px 10px;
    padding-left: 10px;
    text-align: left;
    margin: 0 30px;
`

export const SideBarLeft = styled.div`
    margin-left: ${props => props.menu ? '0' : '-100%'};
    width: 280px;
    max-width: 280px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9999;
    height: 100%;
    transition: .3s;

    @media (min-width: 1024px) {
        position: static;
        width: 100%;
        margin-left: 0;
    }
`
export const BoxSideBar = styled.aside`
    width: 100%;
    height: 100%;
    background: red;
    padding: .8em 0;
    overflow: auto;
`
export const MenuLeft = styled.button`
    width: 100%;
    height: ${({ height }) => height || 'auto'}px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    border: none;
    outline: 0;
    position: relative;
    font-family: Poppins;
    border-radius: 24px 24px 0px 0px;
    border-bottom: 1px solid #525252;
    padding: 0;
    background: transparent;
    ${props => props.active &&
css`
    border-bottom: none;
    border-radius: 24px;
    `
};

    align-self: ${({ alignSelf }) => alignSelf || 'auto'};
    & > div:first-child {
        justify-content: space-between;
        pointer-events: none;
        padding: 35px;
        ${props => props.active &&
css`
    background: var(--color-base-black);
    `
};
     }
    transition: .4s ease;
    overflow: hidden;
`
export const Row = styled.div`
    align-items: center;
    background-color: transparent;
    display: flex;
    flex-direction: row;
    height: 40px;
    padding: 8px 0px;
    position: relative;
    width: 100%;
    z-index: 10;
`
export const OptionMenu = styled.div`
    width: 100%;
    display: block;
    overflow: auto;
    width: 100%;
    overflow: hidden;
    padding: 0;
    ${props => props.active &&
css`
    background-color: #E4E4E4;
    border-bottom: none;
    `};
`
export const Box = styled.div`

`
export const BoxTitleNavBar = styled.div`
    padding: 5px 0 50px;
    text-align: center;
    width: 100%;
    background: blue;
`

export const ContainerBurger = styled.div`
    width: max-content;
    .BurgerMenu__container {
        align-items: center;
        display: flex;
        flex-direction: column;
    div {
      background-color: transparent;
      transition: all .3s ease-out;
    }
    .open:nth-child(1) {
      transform: rotate(-180deg);
    }
}`
