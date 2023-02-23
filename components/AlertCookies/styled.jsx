import styled from 'styled-components'

export const ContentToast = styled.div`
    .alert {
    -ms-transform: translateX(-50%);
    -webkit-box-shadow: 0px 5px 10px 0px rgb(150 144 162 / 6%);
    -webkit-transform: translateX(-50%);
    background-color: var(--color-base-white);
    border-radius: 3.125rem;
    border: 1px solid transparent;
    bottom: 17vh;
    box-shadow: 0px 5px 10px 0px rgb(150 144 162 / 6%);
    display: flex;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    font-size: 0.95em;
    height: 6rem;
    left: 50%;
    margin-bottom: 1rem;
    padding: 1.5625rem;
    place-content: space-between;
    position: fixed;
    place-items: center;
    transform: translateX(-50%);
    width: 756px;
    z-index: var(--z-index-999);
}

`
