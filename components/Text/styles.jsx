import styled from 'styled-components'

export const CustomText = styled.span`
    font-size: ${({ fontSize }) => fontSize || '1.4rem'};
    font-family: ${({ fontFamily }) => fontFamily || 'Poppins'};
    text-align: ${({ align }) => align || 'flex-start'};
    line-height: ${({ lineHeight }) => lineHeight || 'inherit'};
    opacity: ${({ opacity }) => opacity || '1'};
    padding: ${({ padding }) => padding || 'initial'};
    margin: ${({ margin }) => margin || 'initial'};
    font-weight: ${({ fontWeight }) => fontWeight || 'initial'};
    color: ${({ color }) => color || 'black'};
`
