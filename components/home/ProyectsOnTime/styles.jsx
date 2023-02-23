import styled, { css } from 'styled-components'

export const WrapperProyectsOnTime = styled.div`
    display: flex;
    max-width: var(--width-max-desktop);
    margin: auto;
    &:last-child {
      margin-top: 167px;
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

& span:nth-child(2) {
    transform: translateX(293px);
}

& span:nth-child(3) {
    transform: translateX(95px);
}
`

export const Box = styled.div`
    width: 50%;
    min-width: 50%;
    max-width: 50%;
    height: 320px;
    flex-wrap: wrap;
    ${props => props.right && css`
    display: flex;
    justify-content: end;
    align-items: flex-end;
    `}
`
