import styled from 'styled-components'

export const ContentMain = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    .ctn_first {
        margin-bottom: 100px;
        padding: 0 2.75vh;
        position: relative;
        height: 50%;
        .ctn_first__title {
            max-width: var(--width-max-desktop);
            margin: auto;
        }
    }
    .ctn_flex {
        display: flex;
    }

.ctn_second {
    height: 50%;
    margin-bottom: 100px;
    padding: 0 2.75vh;
    display: flex;
    align-items: flex-end;
    position: relative;
    flex-direction: column;
    justify-content: center;
    .wrapper_text {
        overflow-wrap: break-word;
        color: white;
        max-width: var(--width-max-desktop);
        margin: auto;
        justify-content: end;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        align-items: flex-end;
        width: 100%;
        text-align: flex-end ;
    }
}
.title {
    font-size: 8.75rem;
    display: flex;
    flex-direction: column;
    font-weight: var(--font-weight-light);
    font-size: 8.75rem;
    line-height: 8.125rem;
    color: var(--color-text-secondary);
    margin-top: 5.3125rem;
    z-index: var(--z-index-99999);
}

.title span {
    font-family: Poppins;
}
.ctn_first__title > h1 > span:nth-child(2) {
    margin-left: 85px;
}
.ctn_first__title > h1 > span:last-child {
    transform: translateX(490px);
}
`
