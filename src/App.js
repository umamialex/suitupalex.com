import React from 'react'
import {
  amber,
  blue,
  deepPurple,
  green,
  grey,
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
  Gmail,
} from 'mdi-material-ui'
import styled from 'styled-components'
import Appearance from './Appearance'
import QuickLink from './QuickLink'
import hawtie from './hawtie.png'
import grafana from './grafana.svg'
import kordami from './kordami.svg'
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
            endColor={grey[800]}
            startColor={grey[900]}
          >
            <BoxWrapper>
              <Title>Grafana Labs</Title>
              <SubTitle>Director of Professional Services</SubTitle>
              <BoxContent>
                <Grafana
                  src={grafana}
                />
              </BoxContent>
            </BoxWrapper>
            <Dates>
              <Start>Aug 2020</Start>
              <End>Current</End>
            </Dates>
          </Box>
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
            color={blue}
          >
            <BoxWrapper>
              <Title>Tenfold</Title>
              <SubTitle>Manager, Integration and Professional Services</SubTitle>
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
          <Box
            color={green}
          >
            <BoxWrapper>
              <Title>Kordami LLC</Title>
              <SubTitle>Cloud Application Architect</SubTitle>
              <BoxContent>
                <Kordami
                  src={kordami}
                />
              </BoxContent>
            </BoxWrapper>
            <Dates>
              <Start>Oct 2019</Start>
              <End>Jun 2020</End>
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

const Kordami = styled.img`
  width: 75%;
`

const Grafana = styled.img`
  width: 75%;
`

export default App
