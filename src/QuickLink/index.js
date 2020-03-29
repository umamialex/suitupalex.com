import React from 'react'
import styled from 'styled-components'

function QuickLink({
  Icon,
  color,
  link,
}) {
  return (
    <Wrapper
      color={color}
      href={link}
      target="_blank"
    >
      <Icon />
    </Wrapper>
  )
}

const Wrapper = styled.a`
  color: ${(p) => p.color};
  margin-bottom: 0.25em;

  @media (max-width: 1000px) {
    margin-left: 0.5em;
    margin-right: 0.5em;
  }
`

export default QuickLink
