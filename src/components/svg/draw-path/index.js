import React, { Component } from 'react'
import Styled, { keyframes } from 'styled-components'
import Markdown from 'react-markdown'

import Header from '../../header.js'

import notes from './notes.md'

const Svg = Styled.svg`
  position: relative
  width: 300px;
  left: 50%;
  transform: translate(-50%, 0);
`

function drawPath (pathLength) {
  return keyframes`
  0% {
    stroke-dashoffset: ${pathLength * 1};
    stroke: red;
  }
  50% {
    stroke-dashoffset: 0;
    stroke: gold;
  }
  100% {
    stroke-dashoffset: ${pathLength * -1};
    stroke: red;
  }
`
}

const Circle = Styled.circle`
  fill: none;
  stroke-width: 10px;
  stroke-dasharray: ${p => p.circleLength};
  animation: ${p => drawPath(p.circleLength)} linear 5s infinite;
`

export default class extends Component {
  constructor (props) {
    super(props)
    this.refCircle = React.createRef()
    this.state = {
      circleLength: 1000,
      notse: 'nope'
    }
  }

  componentDidMount () {
    this.setState({ circleLength: this.refCircle.current.getTotalLength() })
    fetch(notes)
      .then(response => response.text())
      .then(md => {
        this.setState({ notes: md })
      })
  }
  render () {
    return (
      <div>
        <Header>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 300 300"
          >
            <Circle
              ref={ this.refCircle }
              cx="150"
              cy="150"
              r="150"
              circleLength={ this.state.circleLength }
            />
          </Svg>
        </Header>

        <Markdown
          source={ this.state.notes }
        />

      </div>
    )
  }
}
