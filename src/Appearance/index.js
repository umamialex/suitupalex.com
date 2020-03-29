import React from 'react'
import {
  pink,
} from '@material-ui/core/colors'
import styled from 'styled-components'

function Appearance({
  date,
  link = '#',
  location,
  title,
}) {
  return (
    <Container>
      <Date>{location || date}</Date>
      <Title
        href={link}
        target="_blank"
      >
        {title}
      </Title>
    </Container>
  )
}

const Container = styled.div`
  color: #000;
  font-family: PT Sans;
  margin-top: 2em;
`

const Date = styled.div`
  font-size: 0.9em;
  opacity: 0.8;
  text-transform: uppercase;
`

const Title = styled.a`
  display: block;
  color: ${pink.A400};
  font-size: 1.5em;
  text-decoration: none;
`

export default Appearance
