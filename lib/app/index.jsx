import 'semantic-ui-css/semantic.min.css'
import './style.scss'

import {
  Container,
  Header,
} from 'semantic-ui-react'
import React from 'react'

class App extends React.Component {
  render() {
    return (
      <Container>
        <div
          style={{
            alignItems: 'center',
            display: 'flex',
            height: '100vh',
          }}
        >
          <div>
            <Header
              style={{
                color: '#00f',
                fontFamily: 'PT Serif',
                fontSize: '5em',
                marginBottom: 0,
              }}
            >SuitUpAlex</Header>
            <span>&nbsp;Alexander Martin</span>
          </div>
        </div>
      </Container>
    )
  }
}

export default App
