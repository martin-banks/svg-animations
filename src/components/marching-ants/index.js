import React, { Component } from 'react'
import Styled, { keyframes } from 'styled-components'

const Svg = Styled.svg`
  position: relative
  width: 300px;
  left: 50%;
  transform: translate(-50%, 0);
`

function drawPath (pathLength) {
  return keyframes`
  0% {
    stroke-dashoffset: 100;
    stroke: red;
  }
  50% {
    stroke-dashoffset: 0;
    stroke: gold;
  }
  100% {
    stroke-dashoffset: 100;
    stroke: red;
  }
`
}

const Circle = Styled.circle`
  fill: none;
  stroke-width: 10px;
  stroke-dasharray: 100 ;
  animation: ${p => drawPath(p.circleLength)} linear 5s infinite;
`

export default class extends Component {
  constructor (props) {
    super(props)
    this.refCircle = React.createRef()
    this.state = {
      circleLength: 1000,
    }
  }

  componentDidMount () {
    this.setState({ circleLength: this.refCircle.current.getTotalLength() })
  }
  render () {
    return (
      <div>
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

      </div>
    )
  }
}
