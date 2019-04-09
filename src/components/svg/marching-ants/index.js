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
      circleLength: 0,
      dynamicLength: 0,
      lengthMin: 0,
      lengthMax: 0,
      modifier: 1,
    }

    this.updateCircleLength = this.updateCircleLength.bind(this)
  }

  updateCircleLength () {
    const { circleLength, dynamicLength, lengthMin, lengthMax, modifier } = this.state
    let newDynaimcLength = dynamicLength
    let newModifier = modifier
    if (modifier === 1 && dynamicLength > (lengthMax - 10)) {
      newModifier = -1
    } else if (modifier === -1 && dynamicLength < (lengthMin + 10)) {
      newModifier = 1
    } else {
      newModifier = modifier
    }
    newDynaimcLength += (1 * newModifier)

    this.setState({
      modifier: newModifier,
      dynamicLength: newDynaimcLength
    })
    window.requestAnimationFrame(this.updateCircleLength)
  }

  componentDidMount () {
    const pathLength = this.refCircle.current.getTotalLength()
    this.setState({
      circleLength: pathLength,
      dynamicLength: pathLength / 10,
      lengthMax: pathLength / 10,
      lengthMin: pathLength / 25,
    })
    // this.updateCircleLength()
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
            circleLength={ this.state.circleLength / 10 }
          />
        </Svg>

        {/* <h1>{ this.state.dynamicLength }</h1> */}

      </div>
    )
  }
}
