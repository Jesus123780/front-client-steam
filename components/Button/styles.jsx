import styled from 'styled-components'

export const CustomButton = styled.button`
    background-color: ${props => props.backgroundColor || '#E0E0E0'};
    width: ${props => props.width || 'auto'};
    border-radius: ${props => props.borderRadius || '0'};
    border: ${props => props.border || 'none'};
    padding: ${props => props.padding || '0'};
    line-height: ${props => props.lineHeight || 'initial'};
    height: ${props => props.height || 'auto'};
    cursor: ${props => props.cursor || 'pointer'};
    margin: ${props => props.margin || '0'};
    font-family: ${props => props.fontFamily || 'Poppins'};
    color: ${props => props.color || 'var(--color-text-primary)'};
`
