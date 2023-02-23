import styled from 'styled-components'

export const Overlay = () => {
  return (
  <CntOverlay>
  </CntOverlay>
  )
}
const CntOverlay = styled.div`
  background-color: #000000e6;
  height: 100%;
  width:  100%;
  z-index: 9990;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
`
