import 'semantic-ui-css/semantic.min.css'
import './style.scss'

import {
  Container,
  Header,
} from 'semantic-ui-react'
import Confetti from 'react-confetti'
import React from 'react'
import fitty from 'fitty'

class App extends React.Component {
  state = {}

  getWindowDimensions = () => {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth,
    })
  }

  componentDidMount() {
    fitty('.fit', {
      maxSize: 90,
    })

    this.getWindowDimensions()
  }

  render() {
    const {
      state,
    } = this

    const {
      height,
      width,
    } = state

    const confetti = width && height
      ? <Confetti
          colors={['#00f']}
          confettiSource={{
            h: 0,
            w: width,
            x: 0,
            y: 0,
          }}
          gravity={0.03}
          height={height}
          numberOfPieces={10}
          width={width}
        />
      : null

    return (
      <div>
        {confetti}
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
      </div>
    )
  }
}

export default App
