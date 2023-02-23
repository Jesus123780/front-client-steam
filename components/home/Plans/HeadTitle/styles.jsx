import styled from 'styled-components'

export const SectionTititle = styled.div`
    position: relative;
    margin: 338px auto 193px auto;
    .content_icon {
        position: absolute;
        top: 10px;
        left: 10px;
        transform: rotate(150deg);
    }
`
export const SectionSubtitle = styled.h2`
    color: var(--color-text-secondary);
    display: flex;
    flex-direction: column;
    font-family: Poppins;
    line-height: 5.3125rem;
    font-size: 5rem;
    font-weight: var(--font-weight-light);
    margin: 0;
    & > span {
    display: inline-block;
    }

    & span:nth-child(1) {
        transform: translateX(99px);
    }

    & span:nth-child(3) {
        /* transform: translateX(95px); */
    }
`
