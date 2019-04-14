import React, { Component } from 'react'
import Styled, { keyframes } from 'styled-components'
import Markdown from 'react-markdown'

import readme from './README.md'

const bounce = keyframes`
  0% {
    transform: translateY(350px) scale(1, 0.70);
  }
  9% {
    transform: translateY(325px) scale(1, 1);
  }
  100% {
    transform: translateY(0px);
  }
`

const Svg = Styled.svg`
  margin: 0 auto 4rem auto;
`

const Circle = Styled.circle`
  fill: red;
  animation: ${bounce} 1.5s ease-out infinite alternate;
`

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      readme: 'Loading...'
    }
  }
  componentDidMount () {
    fetch(readme)
      .then(response => response.text())
      .then(text => this.setState({ readme: text }))
      .catch(console.error)
  }
  render () {
    return (
      <div>
        <Svg
          width="300"
          height="400"
          viewBox="0 0 300 400"
        >
          <Circle cx="150" cy="0" r="100"/>
        </Svg>

        <Markdown source={ this.state.readme } />
      </div>
    )
  }
}
