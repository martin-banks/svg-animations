import React, { Component } from 'react'
import Styled, { keyframes } from 'styled-components'

function drawArc (length) {
  return keyframes`
    0% {
      stroke-dashoffset: ${length};
    }
    50% {
      stroke-dashoffset: 0;
    }
    100% {
      stroke-dashoffset: 0;
    }
    `
}
const Arc = Styled.path`
  fill: none;
  stroke-width: 13px;
  stroke-dasharray: ${p => p.length};
  stroke-dashoffset: ${p => p.length};
  animation: ${p => drawArc(p.length)} 4s infinite alternate ${p => p.length * 0.005}s;
`
const Red = Styled(Arc)`
  stroke: #d34022;
`
const Yellow = Styled(Arc)`
  stroke: #fad22f;
`
const Green = Styled(Arc)`
  stroke: #53c66b;
`
const Blue = Styled(Arc)`
  stroke: #4d76da;
`
const Purple = Styled(Arc)`
  stroke: #6f21a4;
`
// .cls-1 {
//   stroke: #d34022;
// }
// .cls-2 {
//   stroke: #fad22f;
// }
// .cls-3 {
//   stroke: #53c66b;
// }
// .cls-4 {
//   stroke: #4d76da;
// }
// .cls-5 {
//   stroke: #6f21a4;
// }
// .cls-6 {
//   fill: #eaeeef;
// }
// .cls-7 {
//   fill: #d6ddde;
// }

const CloudLight = Styled.path`
  fill: #d6ddde;
`
const CloudDark = Styled.path`
  fill: #eaeeef;
`


export default class extends Component {
  constructor (props) {
    super(props)

    this.redRef = React.createRef()
    this.yellowRef = React.createRef()
    this.greenRef = React.createRef()
    this.blueRef = React.createRef()
    this.purpleRef = React.createRef()

    this.state = {
      lengths: {
        red: 0,
        yellow: 0,
        green: 0,
        blue: 0,
        purple: 0,
      }
    }
  }

  componentDidMount () {
    const lengths = {
      red: this.redRef.current.getTotalLength(),
      yellow: this.yellowRef.current.getTotalLength(),
      green: this.greenRef.current.getTotalLength(),
      blue: this.blueRef.current.getTotalLength(),
      purple: this.purpleRef.current.getTotalLength(),
    }
    this.setState({ lengths })
  }

  render () {
    return (
      <div>
        <svg
          width="400"
          height="400"
          viewBox="0 0 300 300"
        >
          <Red
            ref={ this.redRef }
            d="M116.15,202.33V179.58a32.71,32.71,0,0,1,65.41,0v22.75"
            length={ this.state.lengths.red }
          />
          <Yellow
            ref={ this.yellowRef }
            d="M103.77,202.33V179.58a45.09,45.09,0,1,1,90.18,0v22.75"
            length={ this.state.lengths.yellow }
          />
          <Green
            ref={ this.greenRef }
            d="M90.88,202.33V179.58a58,58,0,0,1,116,0v22.75"
            length={ this.state.lengths.green }
          />
          <Blue
            ref={ this.blueRef }
            d="M78,202.33V179.58a70.86,70.86,0,1,1,141.71,0v22.75"
            length={ this.state.lengths.blue }
          />
          <Purple
            ref={ this.purpleRef }
            d="M66.11,202.33V179.58a82.75,82.75,0,1,1,165.5,0v22.75"
            length={ this.state.lengths.purple }
          />


          <CloudDark d="M62.92,177.38a18,18,0,0,1,8.37,2.08,25.73,25.73,0,0,1,21.25-11.63c10,0,18.72,6,23.14,14.81a16.17,16.17,0,0,1,8.5-2.44c9.42,0,17,8.16,17,18.22v4.75H43.77v-5.34C43.77,186.54,52.34,177.38,62.92,177.38Z"/>
          <CloudLight d="M66.18,182.85a17.74,17.74,0,0,1,7.45,1.64,24,24,0,0,1,39.5,2.5,16.35,16.35,0,0,1,7.55-1.92c15.18-.26,20.18,18.1,20.18,18.1h-97S47.86,182.85,66.18,182.85Z"/> */}

          <CloudDark d="M177.92,177.38a18,18,0,0,1,8.37,2.08,25.73,25.73,0,0,1,21.25-11.63c10,0,18.72,6,23.14,14.81a16.17,16.17,0,0,1,8.5-2.44c9.42,0,17.05,8.16,17.05,18.22v4.75H158.77v-5.34C158.77,186.54,167.34,177.38,177.92,177.38Z"/>
          <CloudLight d="M181.09,182.53a17.74,17.74,0,0,1,7.45,1.64,24,24,0,0,1,39.5,2.5,16.35,16.35,0,0,1,7.55-1.92c15.18-.26,20.18,18.1,20.18,18.1h-97S162.77,182.53,181.09,182.53Z"/>
        </svg>
      </div>

    )
  }
}
