import styled from 'styled-components'

export const Section = styled.img`
  touch-action: unset;
`

export const Img = styled.img`
  z-index: -99;
  position: absolute;
  touch-action: unset;
  width: 100%;
  height: 100%;
`

export const Wrapper = styled.div`
  & > div {
    width: 100%;
    height: 100%;
    position: absolute;
  }
`
