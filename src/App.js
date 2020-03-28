import React from 'react'
import {
  Paper,
} from '@material-ui/core'
import {
  red,
} from '@material-ui/core/colors'
import {
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles'
import styled from 'styled-components'
import hawtie from './hawtie.jpg'

const theme = createMuiTheme({
  palette: {
    background: {
      paper: 'rgba(255, 255, 255, 0.6)',
    },
  },
})

function App() {
  return (
    <ThemeProvider
      theme={theme}
    >
      <Page>
        <Container>
          <Polaroid
            elevation={3}
            square
          >
            <Hawtie
              src={hawtie}
            />
            <Marker>
              <Initials>A.M.</Initials>
              <BirthYear>1991</BirthYear>
            </Marker>
          </Polaroid>
        </Container>
      </Page>
    </ThemeProvider>
  )
}

const Page = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
`

const Container = styled.div`
  display: inline-flex;
  max-width: 40em;
  padding: 3em;
`

const Polaroid = styled(Paper)`
  background-color: rgba(255, 255, 255, 0.25);
  padding: 2.5em 3em 1em 3em;
`

const Hawtie = styled.img`
  box-sizing: border-box;
  width: 100%;
`

const Marker = styled.div`
  color: ${red.A400};
  display: flex;
  flex-direction: row;
  font-family: VT323;
  font-size: 3em;
  justify-contnet: space-between;
`

const Initials = styled.div`
`

const BirthYear = styled.div`
  align-self: flex-end;
  margin-left: auto;
`

export default App
