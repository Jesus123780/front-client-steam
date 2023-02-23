import styled from 'styled-components'

export const Work = styled.div`
    max-width: 1600px;
    margin: auto;
    .list-service {
        display: flex;
        place-content: center;
        align-items: center;
    }
    .ctn_marquee__row {
        margin: 182px 0;
    }
`

export const Service = styled.div`
    display: flex;
    place-content: center;
    padding: 0 2.75vh;
    justify-content: space-between;
    margin: 200px 0;
    align-items: center;
    .item-section {
        width: 50%;
        min-width: 50%;
    }
    .item-section:nth-child(2) {
        text-align: right;
        width: 18%;
    min-width: 28%;
    }
`
export const WrapperCard = styled.div`
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(auto-fill,minmax(max(400px,33.3333333333% - 32px),1fr));
    .list-service {
        display: flex;
    }
`
