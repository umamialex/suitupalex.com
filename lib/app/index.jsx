import 'semantic-ui-css/semantic.min.css'
import './style.scss'

import {
  Container,
  Header,
} from 'semantic-ui-react'
import React from 'react'
import fitty from 'fitty'

class App extends React.Component {
  componentDidMount() {
    fitty('.fit', {
      maxSize: 130,
    })
  }

  render() {
    return (
      <Container>
        <div
          style={{
            alignItems: 'stretch',
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            justifyContent: 'center',
          }}
        >
          <div>
            <div
              className='fit'
              style={{
                color: '#00f',
                fontFamily: 'PT Serif',
                lineHeight: 'normal',
                marginBottom: 0,
              }}
            >SuitUpAlex</div>
          </div>
          <div>&nbsp;Alexander Martin</div>
        </div>
      </Container>
    )
  }
}

export default App
