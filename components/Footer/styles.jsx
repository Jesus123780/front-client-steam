import styled from 'styled-components'

export const WrapperFooter = styled.div`
    height: 40rem;
.container {
    color: var(--color-text-white);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin: auto;
    max-width: var(--width-max-desktop);
    padding: 0.625rem;
    width: 100%;
}

.wrapper-second, .wrapper-first {
    margin: 1.875rem;
    padding: 0.625rem;
}

.wrapper-second, .social {
    align-items: center;
    display: flex;
    justify-content: space-between;
}
.wrapper-second:nth-child(2) {
    padding: 1.875rem 0;
}
.paragraph {
    margin-left: 1.25rem;
}

.social {
    margin: 0 0 0 auto;
}

.insta, .img1 {
    margin: 0.625rem;
}

.wrapper-second {
    border-top: 1px solid #525252;
}
`
