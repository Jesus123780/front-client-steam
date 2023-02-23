import styled from 'styled-components'

export const WarapperToggle = styled.div`
  display: flex;
`
export const CheckBoxWrapper = styled.div`
  position: relative;
`
export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 82px;
  height: 40px;
  border-radius: 32px;
  background: var(--color-text-secondary);

  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    margin: 2px;
    background: var(--color-base-black);
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
      transition: 0.2s linear;
  }
`
export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
  background: var(--color-background-secondary);

    &::after {
      content: "";
      display: block;
      border-radius: 32px;
      width: 36px;
      height: 36px;
      margin-left: 44px;
      transition: 0.2s linear;
    }
  }
`
