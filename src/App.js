import React from 'react'
import styled from 'styled-components'
import hawtie from './hawtie.jpg'

function App() {
  return (
    <Hawtie
      src={hawtie}
    />
  )
}

const Hawtie = styled.img`
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
`

export default App
