import React from 'react'
import {
  amber,
  blue,
  deepPurple,
  green,
  indigo,
  lightBlue,
  orange,
  pink,
  red,
} from '@material-ui/core/colors'
import {
  ThemeProvider,
} from '@material-ui/core/styles'
import {
  ExpandMore,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
} from '@material-ui/icons'
import {
  Discord,
  Gmail,
} from 'mdi-material-ui'
import styled from 'styled-components'
import Appearance from './Appearance'
import QuickLink from './QuickLink'
import hawtie from './hawtie.png'
import tenfold from './tenfold.svg'

const heart = [
  'M23.6',
  '0c-3.4',
  '0-6.3',
  '2.7-7.6',
  '5.6C14.7',
  '2.7',
  '11.8',
  '0',
  '8.4',
  '0C3.8',
  '0',
  '0',
  '3.8',
  '0',
  '8.4c0',
  '9.4',
  '9.5',
  '11.9',
  '16',
  '21.2c6.1-9.3',
  '16-12.1',
  '16-21.2C32',
  '3.8',
  '28.2',
  '0',
  '23.6',
  '0z',
].join(',')

const heartBox = '0 0 32 29.6'

function App() {
  return (
    <ThemeProvider>
      <Page>
        <Info>
          <QuickLinks>
            <QuickLink
              Icon={Instagram}
              color={orange.A400}
              link="https://instagram.com/suitupalex"
            />
            <QuickLink
              Icon={Twitter}
              color={lightBlue.A400}
              link="https://twitter.com/suitupalex"
            />
            <QuickLink
              Icon={LinkedIn}
              color={blue[800]}
              link="https://linkedin.com/in/suitupalex"
            />
            <QuickLink
              Icon={GitHub}
              color="#000"
              link="https://github.com/suitupalex"
            />
            <QuickLink
              Icon={Gmail}
              color={red[500]}
              link="mailto:alex@suitupalex.com"
            />
          </QuickLinks>
          <InfoContainer>
            <Name>
              A
              <Thirteen>
                13
              </Thirteen>
              x&nbsp;&nbsp;&nbsp;&nbsp;Martin
            </Name>
            <HawtieContainer>
              <HawtieBackground />
              <BigHeart
                viewBox={heartBox}
              >
                <path d={heart} />
              </BigHeart>
              <AnimatedHeart
                viewBox={heartBox}
              >
                <path d={heart} />
              </AnimatedHeart>
              <Heart
                viewBox={heartBox}
              >
                <path d={heart} />
              </Heart>
              <Hawtie
                src={hawtie}
              />
            </HawtieContainer>
          </InfoContainer>
          <ScrollIndicator>
            <ExpandMore
              fontSize="large"
            />
          </ScrollIndicator>
        </Info>
        <Boxes>
          <Box
            color={deepPurple}
          >
            <BoxWrapper>
              <Title>Athletes.gg Inc.</Title>
              <SubTitle>Founder & CEO</SubTitle>
              <BoxContent>
                <Agg>athletes.gg</Agg>
                <AggSlogan>The data platform for esports athletes.</AggSlogan>
              </BoxContent>
            </BoxWrapper>
            <Dates>
              <Start>Dec 2018</Start>
              <End>Current</End>
            </Dates>
          </Box>
          <Box
            endColor={pink[50]}
            startColor={pink[100]}
            shrink
          >
            <BoxWrapper>
              <SoftTitle>Speaking</SoftTitle>
              <Appearances>
                <Appearance
                  date="March 7, 2020"
                  title="HuskyX — Industry Speakers"
                />
              </Appearances>
              <Divider />
              <SoftTitle>Panels</SoftTitle>
              <Appearances>
                <Appearance
                  date="March 19, 2020"
                  title="Women of ALPFA — A Virtual Panel Discussion to Empower Women"
                />
              </Appearances>
              <Divider />
              <SoftTitle>Podcasts</SoftTitle>
              <Appearances>
                <Appearance
                  location="Thom Singer"
                  title="Episode #514: The World of Esports with Alex Martin"
                  link="https://thomsinger.com/podcast/esports/"
                />
                <Appearance
                  location="LeanStarter"
                  title="Episode #4: Video Game and Esports Startup Strategy Session w/ Athletes.gg"
                  link="https://www.youtube.com/watch?v=aa8p40r7E74"
                />
                <Appearance
                  location="BlogInYou"
                  title="Episode #6: Alex Martin Creator of Athletes.gg"
                  link="https://soundcloud.com/anaperezworld/alex-martin-creator-of-athletesgg"
                />
                <Appearance
                  location="#AskTheCEO"
                  title="Episode #84: Esports Marketing Explained"
                  link="https://www.youtube.com/watch?v=b40hD41m51g&feature=youtu.be"
                />
              </Appearances>
            </BoxWrapper>
          </Box>
          <Box
            color={green}
          >
            <BoxWrapper>
              <Title>Kordami LLC</Title>
              <SubTitle>Software Architect</SubTitle>
              <BoxContent>
                <Kordami
                  viewBox="0 0 451.07 120.37"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g transform="translate(-1036.03 -264.92)">
                    <path d="m1188.52 339.28a5.61 5.61 0 0 1 -.73-5.23l.87-2.38a5.67 5.67 0 0 0 -1-5.62l-3.44-4.06a5.64 5.64 0 0 1 -.54-.76c-.24-.74-.49-1.47-.76-2.2a5.65 5.65 0 0 1 .16-2.25l2.48-8.77a5.66 5.66 0 0 0 -2.86-6.58l-3.28-1.68a5.66 5.66 0 0 1 -3.08-5v-6.35a5.66 5.66 0 0 0 -5.28-5.65l-3.1-.21a5.66 5.66 0 0 1 -4.82-3.42l-1.3-3a5.66 5.66 0 0 0 -7.31-3l-1.2.48a5.66 5.66 0 0 1 -5.67-.86l-4.77-3.87a5.66 5.66 0 0 0 -5.7-.85l-2.59 1.05a5.66 5.66 0 0 1 -5.46-.67l-.71-.52a5.66 5.66 0 0 0 -5.66-.58l-2.65 1.2a5.66 5.66 0 0 1 -5.23-.29l-4.09-2.43a5.66 5.66 0 0 0 -6.38.41l-3.52 2.75a5.66 5.66 0 0 1 -4.57 1.1l-3.31-.64a5.66 5.66 0 0 0 -5.9 2.58 5.66 5.66 0 0 1 -4.15 2.64l-3.75.44a5.66 5.66 0 0 0 -4.12 2.6l-1.87 2.95c-22 12.48-37.2 34.57-37.2 58.59 0 17.53 7.38 28.31 13.58 34.28a43 43 0 0 0 29.56 11.89c11 0 21-3.2 28.2-9 8.27-6.72 12.64-16.64 12.64-28.71 0-16.2-8.66-31.11-28.81-31.11-15.28 0-27.25 11.36-27.25 25.86 0 13.38 10.32 20.38 19.32 20.38 9.25 0 18.09-6 18.09-18.85h-6.88c0 9.52-6.3 12-11.21 12-7.9 0-12.45-7.48-12.45-13.5 0-10.82 8.76-19 20.37-19 14.45 0 21.94 10.76 21.94 24.23 0 22.75-17.54 30.86-34 30.86-18 0-36.26-13.5-36.26-39.29 0-20.07 12-38.64 29.63-50.2a74 74 0 0 1 40.32-12.11 67.74 67.74 0 0 1 67.62 64.07h-47.87c.32-4.13 1.66-11.43 6.83-17 .18-.19.37-.37.55-.55s.66-.63 1-.93a24 24 0 0 1 10.37-5.12 38.64 38.64 0 0 1 8.93-1v-6.88c-11.11 0-19.81 3.28-25.87 9.75-.27.29-.53.59-.79.88a30.87 30.87 0 0 0 -5.15 8.52 39.37 39.37 0 0 0 -2.81 15.92l.21 3.22h61.56l1.2-1.92a5.91 5.91 0 0 0 -.08-6.61z" fill="#00cd6f" />
                    <path d="m1146.23 326.45v.31a4 4 0 1 0 0-.31z" fill="#00cd6f" />
                    <g fill="#fff">
                      <path d="m1203.56 294.9h11.84v21.36h.24l15.6-21.36h12.88l-15.76 20.8 18.72 31.36h-13l-12.64-22-6.08 8v14h-11.84v-52.16z" />
                      <path d="m1265.85 306.42c10 0 19.28 7.6 19.28 20.8s-9.28 20.8-19.28 20.8-19.36-7.6-19.36-20.8 9.28-20.8 19.36-20.8zm0 32.08c4.8 0 7.28-4.4 7.28-11.28s-2.48-11.28-7.28-11.28-7.28 4.4-7.28 11.28 2.43 11.28 7.28 11.28z" />
                      <path d="m1291.84 307.38h9.6l.8 7h.32c2.88-5.36 7.2-7.92 11.28-7.92a11.39 11.39 0 0 1 4.72.8l-1.92 10.16a14.8 14.8 0 0 0 -4.32-.64c-3 0-6.64 1.92-8.72 7.28v23h-11.76z" />
                      <path d="m1336.48 306.42c4.4 0 7 1.6 9.76 4.16l-.48-6.08v-13.5h11.76v56.08h-9.6l-.8-3.92h-.32c-2.8 2.8-6.72 4.88-10.56 4.88-9.84 0-16.24-7.84-16.24-20.8s8.08-20.82 16.48-20.82zm2.8 32c2.56 0 4.56-1 6.48-3.6v-16.24a9.4 9.4 0 0 0 -6.56-2.56c-3.76 0-7.12 3.52-7.12 11 0 7.88 2.64 11.4 7.2 11.4z" />
                      <path d="m1386.95 321.54c-.24-3.52-2-5.76-6.24-5.76-3.36 0-6.72 1.36-10.56 3.6l-4.16-7.76a32.8 32.8 0 0 1 17-5.2c10.16 0 15.76 5.76 15.76 17.92v22.72h-9.6l-.88-4.08h-.27c-3.36 3-7.12 5-11.6 5-7.2 0-11.76-5.28-11.76-12-.02-8.28 6.62-12.84 22.31-14.44zm-6.56 17.36c2.72 0 4.48-1.28 6.56-3.36v-7c-8.4 1.12-11.12 3.52-11.12 6.56-.01 2.6 1.75 3.8 4.55 3.8z" />
                      <path d="m1407.33 307.38h9.6l.8 5.12h.27c3.28-3.28 6.8-6.08 12-6.08 5.6 0 9 2.4 11 6.64 3.52-3.6 7.2-6.64 12.48-6.64 8.56 0 12.4 6.08 12.4 16v24.64h-11.76v-23.12c0-5.76-1.52-7.52-4.88-7.52-2 0-4.24 1.28-6.8 3.84v26.8h-11.76v-23.12c0-5.76-1.52-7.52-4.88-7.52-1.92 0-4.24 1.28-6.72 3.84v26.8h-11.76v-39.68z" />
                      <path d="m1473.5 295.38c0-3.6 2.88-6.08 6.8-6.08s6.8 2.48 6.8 6.08-2.8 6.16-6.8 6.16-6.8-2.54-6.8-6.16zm1 12h11.76v39.68h-11.76z" />
                    </g>
                  </g>
                </Kordami>
              </BoxContent>
            </BoxWrapper>
            <Dates>
              <Start>Oct 2019</Start>
              <End>Current (Contractor)</End>
            </Dates>
          </Box>
          <Box
            color={blue}
          >
            <BoxWrapper>
              <Title>Tenfold</Title>
              <SubTitle>Integration and Professional Services Manager</SubTitle>
              <BoxContent>
                <Tenfold
                  src={tenfold}
                />
              </BoxContent>
            </BoxWrapper>
            <Dates>
              <Start>Jan 2017</Start>
              <End>Apr 2020</End>
            </Dates>
          </Box>
        </Boxes>
      </Page>
    </ThemeProvider>
  )
}

const Page = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1000px) {
    flex-direction: column;
    overflow-x: hidden;
    padding-right: 0;
  }
`

const Info = styled.div`
  align-items: flex-end;
  align-self: flex-start;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: sticky;
  top: 0em;
  min-height: 100vh;

  @supports (-webkit-appearance:none) {
    min-height: calc(100vh - 56px);
  }

  @media (max-width: 1000px) {
    align-items: center;
    font-size: 0.8em;
    margin-left: 0;
    position: initial;
    width: 100%;
  }
`

const QuickLinks = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5em;
  margin-top: 3em;

  @media (max-width: 1000px) {
    flex-direction: row;
    margin-right: 0;
  }
`

const InfoContainer = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  margin-top: 4em;
  margin-bottom: -7em;
  margin-right: 5em;

  @media (max-width: 1000px) {
    margin-right: 0;
  }
`

const ScrollIndicator = styled.div`
  color: ${indigo.A100};
  display: none;
  padding-bottom: 2em;
  text-align: center;

  @media (max-width: 1000px) {
    display: block;
  }
`

const Name = styled.div`
  white-space: nowrap;
  font-family: VT323;
  font-size: 4em;
  margin-bottom: 1rem;
  text-transform: uppercase;
`

const Thirteen = styled.div`
  background-color: ${red.A400};
  color: #fff;
  display: inline-block;
`

const Heart = styled.svg`
  fill: #fff;
  left: calc(50% + 4em);
  position: absolute;
  top: 50%;
  width: 4em;
`

const AnimatedHeart = styled(Heart)`
  animation: Pulse 2s ease infinite;
`

const BigHeart = styled(Heart)`
  fill: ${amber.A200};
  left: calc(50% - 3em);
  top: calc(50% - 6em);
  width: 16em;
  transform: rotate(10deg);
`

const HawtieContainer = styled.div`
  position: relative;
  right: 3.5em;
  text-align: center;
  top: -7em;
`

const HawtieBackground = styled.div`
  clip-path: 
    polygon(
      0% 10%,    /* top left */
      15% 0%,    /* top left */
      95% 0%,    /* top right */
      100% 0%,   /* top right */
      100% 90%,  /* bottom right */
      85% 100%,  /* bottom right */
      0% 100%,   /* bottom left */
      0 95%      /* bottom left */
    );
  position: absolute;
  height: calc(100% - 8em);
  width: 100%;
  box-sizing: border-box;
  margin: 3em 0;
`

const Hawtie = styled.img`
  margin: 0 1em;
  position: relative;
  width: 15em;
`

const Boxes = styled.div`
  align-self: flex-end;
  display: inline-flex;
  flex-direction: column;
  width: 60em;
  max-width: 100%;
`

const Box = styled.div`
  animation: GradientBackground 15s ease infinite;
  background: linear-gradient(270deg, ${(p) => p.startColor || p.color.A100}, ${(p) => p.endColor || p.color.A400});
  background-size: 200% 200%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-height: ${(p) => (p.shrink ? 'auto' : '75vh')};
  padding: 5vh;

  @media (max-width: 1000px) {
    font-size: 0.75em;
  }
`

const Title = styled.div`
  color: #fff;
  font-family: VT323;
  font-size: 3em;
  text-transform: uppercase;
`

const SubTitle = styled.div`
  color: #fff;
  font-family: VT323;
  font-size: 2em;
`

const SoftTitle = styled.div`
  color: ${pink.A700};
  font-family: Chivo;
  font-size: 1.5em;
  font-weight: 900;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const Dates = styled.div`
  color: #fff;
  display: flex;
  flex-direction: row;
  font-family: VT323;
  font-size: 2em;
  justify-content: space-between;
  margin-top: 0.25em;
  width: 100%;
  flex-shrink: 0;
`

const Start = styled.div`
`

const End = styled.div`
  align-self: flex-end;
  margin-left: auto;
`

const Appearances = styled.div`
`

const Divider = styled.div`
  background-color: ${pink.A700};
  height: 0.5em;
  margin: 2.25em 0;
  opacity: 0.15;
`

const BoxContent = styled.div`
  align-items: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
`

const Agg = styled.div`
  font-family: Comfortaa;
  font-weight: bold;
  font-size: 7em;

  @media (max-width: 1000px) {
    font-size: 4em;
  }
`

const AggSlogan = styled.div`
  font-family: Roboto;
  font-size: 1.5em;
  margin-top: 0.5em;

  @media (max-width: 1000px) {
    font-size: 1.25em;
  }
`

const Tenfold = styled.img`
  width: 75%;
`

const Kordami = styled.svg`
  width: 75%;
`

export default App
