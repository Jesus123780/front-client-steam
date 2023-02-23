import styled from 'styled-components'

export const ContentForm = styled.form`

`

export const Field = styled.fieldset`
    margin: 0 0 40px;
    padding: 0;
    border: none;
`

export const ProductType = styled.div`
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(50%, 1fr) );
`

export const PaymentMethod = styled.div`
    
`

export const PlatFormOption = styled.div`
    display: flex;
    label {
        -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    position: relative;
    font-family: 'Poppins', sans-serif;
    margin-right: 18px;
    padding: 193px 20px 20px;
    border-radius: 4px;
    border: 1px dashed #bababa;
    background: no-repeat 50% 40%;
    cursor: pointer;
    }
    label .is-web {
    margin-right: 16px;
    padding-top: 135px;
    padding-bottom: 10px;
    background-position-y: 24px;
    background-size: 95px;
    background-image: url('/images/w1.png');
    }
    & label::before {
    content: "";
    position: absolute;
    top: -1px;
    bottom: -1px;
    left: -1px;
    right: -1px;
    -webkit-transition: all .15s cubic-bezier(0.13, 0.47, 0.66, 0.82);
    transition: all .15s cubic-bezier(0.13, 0.47, 0.66, 0.82);
}
& label:hover::before {
    -webkit-box-shadow: inset 0 0 0 5px #c3323a;
    box-shadow: inset 0 0 0 5px #c3323a;
}

`
