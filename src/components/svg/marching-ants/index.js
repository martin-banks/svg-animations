import React, { Component } from 'react'
import Styled, { keyframes } from 'styled-components'

const Svg = Styled.svg`
  position: relative
  width: 300px;
  left: 50%;
  transform: translate(-50%, 0);
`

function drawPath (pathLength, rotation) {
  return keyframes`
  0% {
    stroke-dashoffset: ${pathLength * 1 * rotation};
    stroke: cyan;
  }
  50% {
    stroke-dashoffset: 0;
    stroke: hotpink;
  }
  100% {
    stroke-dashoffset: ${pathLength * -1 * rotation};
    stroke: cyan;
  }
`
}

const Rect = Styled.rect`
  position: relative;
  fill: none;
  stroke-width: 10px;
  stroke-dasharray: ${p => p.length};
  animation: ${p => drawPath(p.length, p.rotation)} linear 5s infinite;
`

const Rect_1 = Styled(Rect)``

const Rect_2 = Styled(Rect)`
  transform: translate(50px, 50px);
`

export default class extends Component {
  constructor (props) {
    super(props)
    this.refRect = React.createRef()
    this.refRect_2 = React.createRef()
    this.state = {
      lengthMin: 0,
      lengthMax: 0,
      modifier: 1,
    }
  }


  componentDidMount () {
    const pathLength = this.refRect.current.getTotalLength()
    const pathLength_2 = this.refRect_2.current.getTotalLength()
    this.setState({
      pathLength,
      pathLength_2,
    })
  }
  render () {
    return (
      <div>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 300"
        >
          <Rect_1
            ref={ this.refRect }
            rotation="1"
            width="400"
            height="400"
            length={ this.state.pathLength / 10 }
          />
          <Rect_2
            ref={ this.refRect_2 }
            rotation="-3"
            width="300"
            height="300"
            length={ this.state.pathLength_2 / 6 }
          />
        </Svg>

      </div>
    )
  }
}
