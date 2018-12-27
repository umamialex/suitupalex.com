import 'semantic-ui-css/semantic.min.css'
import './style.scss'

import {
  Container,
  Header,
  Icon,
  List,
} from 'semantic-ui-react'
import Confetti from 'react-confetti'
import React from 'react'
import fitty from 'fitty'

class Project extends React.Component {
  render() {
    const {
      props,
    } = this

    const {
      dates,
      isBig,
      isInverted,
      role,
      summary,
      title,
    } = props

    return (
      <div
        style={{
          color: isInverted ? '#fff' : undefined,
          fontSize: isBig ? '1.75em' : '1em',
          paddingBottom: '5rem',
        }}
      >
        <Header
          size='large'
          style={{
            color: isInverted ? '#fff' : undefined,
          }}
        >{title}</Header>
        <p>
          <b>{role}</b> &mdash; {dates}
          <br/>
          <b>Austin, TX</b>
        </p>
        <p><Icon name='quote left'/>{summary}</p>
      </div>
    )
  }
}

class App extends React.Component {
  state = {}

  getWindowDimensions = () => {
    this.setState({
      height: document.documentElement.scrollHeight,
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
            <p
              style={{
                fontSize: '1.5em',
              }}
            >
              Alexander Martin
            </p>
            <List
              items={[
                {
                  content: 'Entrepreneur',
                  icon: 'industry',
                },
                {
                  content: 'Engineer',
                  icon: 'code',
                },
                {
                  content: 'Designer',
                  icon: 'paint brush',
                },
                {
                  content: 'Gamer',
                  icon: 'gamepad',
                },
                {
                  content: 'Traveler',
                  icon: 'plane',
                }
              ]}
            />
          </div>
        </Container>
        <div
          style={{
            alignItems: 'stretch',
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            justifyContent: 'center',
            margin: '5rem 0',
          }}
        >
          <Container
            style={{
              backgroundColor: '#00f',
              color: '#fff',
              padding: '2rem',
            }}
          >
            <p
              style={{
                fontSize: '1.5rem',
              }}
            >
              <Header
                size='large'
                style={{
                  color: '#fff',
                }}
              >Bio</Header>
              <p>
                I started building things when I was 8, making games with BASIC and Game Maker. When you make games, you need to show &rsquo;em off. So I learned web development as well.
              </p>
              <p>
                For some weird reason I decided to go to college for medicine. It took until senior year for me to come to my senses and start building again.
              </p>
              <p>
                I left for the world of start ups and never looked back.
              </p>
            </p>
          </Container>
        </div>
        <div
          style={{
            minHeight: '100vh',
          }}
        >
          <div
            style={{
              backgroundColor: '#00f',
              paddingTop: '4.5rem',
            }}
          >
            <Container>
              <Project
                dates='Current'
                isBig
                isInverted
                role='Founder & CEO'
                summary='The homepage for esports and professional gaming.'
                title='athletes.gg'
              />
            </Container>
          </div>
          <div
            style={{
              paddingTop: '5rem',
            }}
          >
            <Container>
              <Project
                dates='Jan &rsquo;17 &ndash; Dec &rsquo;18'
                role='Integrations and Professional Services Manager'
                summary='The next generation of CTI.'
                title='Tenfold'
              />
              <Project
                dates='Dec &rsquo;15 &ndash; Jan &rsquo;17'
                role='Lead Software Engineer'
                summary='Leaders in the digital agency space.'
                title='Springbox'
              />
              <Project
                dates='Aug &rsquo;14 &ndash; Oct &rsquo;15'
                role='Founding Software Engineer'
                summary='Have better conversations with customers.'
                title='Help.com'
              />
            </Container>
          </div>
        </div>
      </div>
    )
  }
}

export default App
