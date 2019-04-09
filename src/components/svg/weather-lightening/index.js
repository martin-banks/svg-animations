import React, { Component } from 'react'
import Styled, { keyframes } from 'styled-components'

const Svg = Styled.svg`
  position: relative
  width: 300px;
  left: 50%;
  transform: translate(-50%, 0);
`

const flash = keyframes`
  0% {
    opacity: 0;
    transform: scale(0)
  }
  5% {
    opacity: 1;
    transform: scale(1)
  }
  8% {
    opacity: 0.4;
    transform: scale(0.9)
  }
  12% {
    opacity: 1;
    transform scale(1.3)
  }
  20% {
    transform: scale(1.3)
  }
  24% {
    opacity: 0;
    transform: scale(1.3)
  }
  100% { 
    opacity: 0;
    transform: scale(1)
  }
`

const Cloud = Styled.path`
  fill: #666;
`

const Bolt = Styled.polygon`
  fill: gold;
  transform-origin: center;
  animation: ${flash} 4s linear infinite;
`

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount () {}
  render () {
    return (
      <div>

        <Svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 392"
        >
          <Bolt points="128.54 154 217.45 249.55 169.96 263.12 226.5 387.5 105.5 249.55 162.04 237.11 128.54 154"/>
          <Cloud d="M239.3,54.23a60.82,60.82,0,0,0-17.74,2.64,76.13,76.13,0,0,0-147-1,61.3,61.3,0,0,0-13.84-1.6,60.49,60.49,0,0,0-.7,121v0H238.6v0l.7,0a60.5,60.5,0,1,0,0-121Z"/>
        </Svg>
      </div>
    )
  }
}
