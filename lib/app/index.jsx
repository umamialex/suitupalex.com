import 'semantic-ui-css/semantic.min.css'
import './style.scss'

import {
  Container,
  Divider,
  Header,
  Icon,
  List,
} from 'semantic-ui-react'
import Confetti from 'react-confetti'
import React from 'react'
import fitty from 'fitty'

const MAX_FONT_SIZE = 90

class Project extends React.Component {
  render() {
    const {
      props,
    } = this

    const {
      bullets = [],
      dates,
      isBig,
      isInverted,
      link,
      location = 'Austin, TX',
      role,
      summary,
      title,
    } = props

    const titleLink = link
      ? <a
          href={link}
          target='_blank'
          rel='noreferrer noopener'
        >{title}</a>
      : title

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
        >{titleLink}</Header>
        <p>
          <b>{role}</b> &mdash; {dates}
          <br/>
          <b>{location}</b>
        </p>
        <p><Icon name='quote left'/>{summary}</p>
        <List
          bulleted
          items={bullets}
        />
      </div>
    )
  }
}

class Separator extends React.Component {
  render() {
    const {
      props,
    } = this

    const {
      children,
    } = props

    return (
      <Container>
        <Divider
          horizontal
          style={{
            color: '#00f',
          }}
        >
          <Icon
            flipped='horizontal'
            name='cut'
          />
          <span
            style={{
              fontSize: '0.8rem',
              margin: '0 1rem',
            }}
          >
            {children}
          </span>
          <Icon
            name='cut'
          />
        </Divider>
      </Container>
    )
  }
}

class Section extends React.Component {
  render() {
    const {
      props,
    } = this

    const {
      children,
    } = props

    return (
      <div
        style={{
          alignItems: 'stretch',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minHeight: '100vh',
          paddingBottom: '10rem',
          paddingTop: '10rem',
        }}
      >
        <Container>
          {children}
        </Container>
      </div>
    )
  }
}

class App extends React.Component {
  static MAX_FONT_SIZE = MAX_FONT_SIZE

  state = {}

  getWindowDimensions = () => {
    this.setState({
      height: document.documentElement.scrollHeight,
      width: window.innerWidth,
    })
  }

  componentDidMount() {
    fitty('.fit', {
      maxSize: App.MAX_FONT_SIZE,
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
        <Section>
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
                content: 'Workaholic',
                icon: 'industry',
              },
              {
                content: 'Engineer',
                icon: 'code',
              },
              {
                content: 'Creator',
                icon: 'paint brush',
              },
              {
                content: 'Gamer',
                icon: 'gamepad',
              },
            ]}
          />
          <List
            horizontal
            items={[
              {
                href: 'https://instagram.com/suitupalex',
                icon: 'instagram',
              },
              {
                href: 'https://youtube.com/suitupalex',
                icon: 'youtube',
              },
              {
                href: 'https://linkedin.com/in/suitupalex',
                icon: 'linkedin',
              },
              {
                href: 'https://twitch.tv/suitupalex',
                icon: 'twitch',
              },
              {
                href: 'https://twitter.com/suitupalex',
                icon: 'twitter',
              },
              {
                href: 'https://facebook.com/suitupalex',
                icon: 'facebook',
              },
            ].map((item) => {
              item.as = 'a'
              item.style = {textDecoration: 'none'}
              item.target = '_blank'

              return item
            })}
            style={{
              marginTop: '1rem',
            }}
          />
        </Section>
        <Separator>Bio</Separator>
        <Section>
          <p
            style={{
              fontSize: '1.5rem',
            }}
          >
            <Header
              size='large'
            >Bio</Header>
            <p>
              I started building things when I was 8, making games with BASIC
              and Game Maker. When you make games, you need to show &rsquo;em
              off. So I learned web development as well.
            </p>
            <p>
              For some odd reason I decided to go to college for medicine.
              I was still hacking away though, building mobile apps and working
              with arduinos to make physical devices.
            </p>
            <p>
              It wasn&rsquo;t until my senior year that I realized I enjoyed
              building products. Coincidentally, my univerity had just created
              an incubator. I joined the inaugural class as a product specialist
              that partnered with business students to make their ideas a
              reality.
            </p>
            <p>
              I joined the world of start ups and never looked back.
            </p>
            <p>
              Outside of work, I&rsquo;m a classically trained musician and
              singer, competitive Smashbros player, mobile photography
              enthusiast, amateur cook, and an avid powerlifter.
            </p>
          </p>
        </Section>
        <Separator>Current</Separator>
        <Section>
          <div
            style={{
              paddingTop: '4.5rem',
            }}
          >
            <Container>
              <Project
                dates='Current'
                link='https://athletes.gg'
                isBig
                role='Founder & CEO'
                summary='The homepage for esports and professional gaming.'
                title='athletes.gg'
              />
            </Container>
          </div>
        </Section>
        <Separator>Previous</Separator>
        <Section>
          <Project
            bullets={[
              {
                content: 'Managed the largest engineering team.',
              },
              {
                content: 'Product managed new and current CTI integrations.',
              },
              {
                content: [
                  'Managed relationships with partners and enterprise',
                  'customers such as',
                  'Adobe,',
                  'Simple,',
                  'Avaya,',
                  'ServiceNow,',
                  'and Marketo.',
                ].join(' '),
              },
              {
                content: 'Implemented scalable product processes and tools.',
              },
              {
                content: 'Main technical resource for enterprise presales.',
              },
              {
                content: 'Built Genesys integration from scratch.',
              },
            ]}
            dates='Jan &rsquo;17 &ndash; Dec &rsquo;18'
            link='https://tenfold.com'
            role='Integrations and Professional Services Manager'
            summary='The next generation of CTI.'
            title='Tenfold'
          />
          <Project
            bullets={[
              {
                content: [
                  'Lead many projects for clients such as',
                  'HomeAway,',
                  'Dell,',
                  'Corpus Christi,',
                  'and Nestle.',
                ].join(' '),
              },
              {
                content: 'Implemented improved engineering process and tools.',
              },
              {
                content: 'Main technical resource for presales.',
              },
            ]}
            dates='Dec &rsquo;15 &ndash; Jan &rsquo;17'
            link='https://springbox.com'
            role='Lead Software Engineer'
            summary='Leaders in the digital agency space.'
            title='Springbox'
          />
          <Project
            bullets={[
              {
                content: 'Very first employee.',
              },
              {
                content:
                  'Laid the engineering foundation for both code and culture.',
              },
            ]}
            dates='Aug &rsquo;14 &ndash; Oct &rsquo;15'
            link='https://help.com'
            role='Founding Software Engineer'
            summary='Have better conversations with customers.'
            title='Help.com'
          />
          <Project
            bullets={[
              {
                content: 'Member of the inaugural Fordham Foundry class.',
              },
              {
                content: [
                  'Partnered with Fordham business students and local Bronx',
                  'entrepreneurs to turn ideas into products.',
                ].join(' '),
              },
            ]}
            dates='Sept &rsquo;12 &ndash; Aug &rsquo;14'
            location='New York, NY'
            role='Founder'
            summary='Your product team.'
            title='Martin Exp LLC'
          />
        </Section>
      </div>
    )
  }
}

export default App
