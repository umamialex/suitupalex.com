import React from 'react'
import {
  amber,
  deepPurple,
  indigo,
  pink,
  red,
} from '@material-ui/core/colors'
import {
  ThemeProvider,
} from '@material-ui/core/styles'
import {
  ExpandMore,
} from '@material-ui/icons'
import styled from 'styled-components'
import hawtie from './hawtie.png'

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
            color={indigo}
          >
            <Polaroid />
            <Marker>
              <Initials>A.M.</Initials>
              <BirthYear>1991</BirthYear>
            </Marker>
          </Box>
          <Box
            color={amber}
          />
          <Box
            color={deepPurple}
          />
          <Box
            color={pink}
          />
        </Boxes>
      </Page>
    </ThemeProvider>
  )
}

const Page = styled.div`
  display: flex;
  overflow-x: hidden;
  justify-content: space-between;

  @media (max-width: 1000px) {
    flex-direction: column;
    padding-right: 0;
  }
`

const Info = styled.div`
  align-items: flex-end;
  align-self: flex-start;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
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
  fill: ${indigo.A400};
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
  align-items: center;
  animation: GradientBackground 20s ease infinite;
  background: linear-gradient(270deg, ${(p) => p.color.A100}, ${(p) => p.color.A200});
  background-size: 400% 400%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 75vh;
  padding: 5vh;
`

const Polaroid = styled.div`
  flex-grow: 1;
`

const Marker = styled.div`
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

const Initials = styled.div`
`

const BirthYear = styled.div`
  align-self: flex-end;
  margin-left: auto;
`

export default App
