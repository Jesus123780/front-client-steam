import styled, { css } from 'styled-components'

export const WPButton = styled.div`
    position: relative;
    z-index: 9999;
    .wa-container  {
        right: auto;
        left: 20px;
        height: 50%;
    }
    .wa-description {
        padding: 15px 40px 15px 20px;
        height: 50%;
        background-color: var(--color-primary-red2);
    }
    .wa-toggle {
        align-items: center;
        background-color: var(--color-primary-red2);
        border-radius: 50px;
        bottom: 20px;
        box-shadow: 0 1px 6px rgb(0 0 0 / 6%), 0 2px 32px rgb(0 0 0 / 16%);
        cursor: pointer;
        display: flex;
        height: 40px;
        justify-content: center;
        left: 20px;
        line-height: 100%;
        padding: 12px 20px;
        position: fixed;
        transition: box-shadow 80ms ease-in-out, width .4s ease .2s;
        white-space: nowrap;
        .label {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    .wa-box {
        overflow: hidden;
        height: 196px;
        width: 100px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        position: fixed;
        bottom: 80px;
        right: 20px;
        max-width: 360px;
        width: 100%;
        border-radius: 6px;
        box-shadow: 0 8px 25px -5px rgb(45 62 79 / 15%);
        transform: translateY(50px) scale(0.9);
        background-color: var(--color-base-white);
        transition: all .3s;
        left: 20px;
        visibility: hidden;
        opacity: 0;
    ${({ show }) => show && css`
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
    `}
    }
    .wa-close {
        display: block;
        width: 15px;
        height: 15px;
        position: absolute;
        top: 7px;
        right: 7px;
        opacity: .5;
        transition: opacity .3s;
    }
    .wa-people {
        color: #000;
        max-height: 845.328px;
        display: flex;
        align-items: center;
        padding: 10px;
        justify-content: center;
        overflow: hidden;
        position: relative;
    }
    .wa-info {
        float: left;
        width: calc(100% - 40px);
        padding-left: 10px;
        display: block;
    }
    .wa-title {
        font-size: 12px;
        line-height: 1.5em;
        opacity: .6;
        display: block;
    }
    .wa-name {
        display: block;
        color: #555555;
        font-weight: bold;
    }
`
