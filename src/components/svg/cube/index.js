import React, { Component } from 'react'
import Styled, { keyframes } from 'styled-components'
import Markdown from 'react-markdown'

import readme from './README.md'

const Svg = Styled.svg`
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  margin: 0 auto 3rem 0;
  perspective: 360px;

`

function animations (side) {
  const animations = {
    front: keyframes`
      0% { transform: rotateX(30deg) translate3d(0px, 0, 200px) rotateY(0deg) ; }
      25% { transform: rotateX(30deg) translate3d(200px, 0, 0px) rotateY(90deg) ; }
      50% { transform: rotateX(30deg) translate3d(0px, 0, -200px) rotateY(180deg) ; }
      75% { transform: rotateX(30deg) translate3d(-200px, 0, 0) rotateY(270deg) ; }
      100% { transform: rotateX(30deg) translate3d(0px, 0, 200px) rotateY(360deg) ; }
    `,
    back: keyframes`
      0% { transform: rotateX(30deg) translate3d(0px, 0, -200px) rotateY(180deg) ; }
      25% { transform: rotateX(30deg) translate3d(-200px, 0, 0) rotateY(270deg) ; }
      50% { transform: rotateX(30deg) translate3d(0px, 0, 200px) rotateY(360deg) ; }
      75% { transform: rotateX(30deg) translate3d(200px, 0, 0) rotateY(450deg) ; }
      100% { transform: rotateX(30deg) translate3d(0px, 0, -200px) rotateY(540deg) ; }
    `,

    right: keyframes`
      0% { transform: rotateX(30deg) translate3d(200px, 0, 0px) rotateY(90deg) ; }
      25% { transform: rotateX(30deg) translate3d(0px, 0, -200px) rotateY(180deg) ; }
      50% { transform: rotateX(30deg) translate3d(-200px, 0, 0px) rotateY(270deg) ; }
      75% { transform: rotateX(30deg) translate3d(0px, 0, 200px) rotateY(360deg) ; }
      100% { transform: rotateX(30deg) translate3d(200px, 0, 0px) rotateY(450deg) ; }
    `,
    left: keyframes`
      0% { transform: rotateX(30deg) translate3d(-200px, 0, 0) rotateY(-90deg) ; }
      25% { transform: rotateX(30deg) translate3d(0px, 0, 200px) rotateY(0deg) ; }
      50% { transform: rotateX(30deg) translate3d(200px, 0, 0) rotateY(90deg) ; }
      75% { transform: rotateX(30deg) translate3d(0px, 0, -200px) rotateY(180deg) ; }
      100% { transform: rotateX(30deg) translate3d(-200px, 0, 0) rotateY(270deg) ; }
    `,
  }
  return animations[side]
}

const Rect = Styled.rect`
  fill: rgba(0,0,0, 0.2);
  /* stroke: red; */
  stroke-width: 10px;
  animation: ${p => animations(p.side)} 15s linear infinite;
  transform-origin: ${p => {
    const { side } = p
    return 'center' // side === 'front' ? 'center' : 'top left'
  }};
`

const rotateCube = keyframes`
  0% {
    transform: rotateY(0deg) rotateX(0deg) rotateZ(0deg);
  }
  100% {
    transform: rotateY(360deg) rotateX(360deg) rotateZ(360deg);
  }
`
const animateFront = keyframes`
  0% {
    transform: translate3d(0px, 0, 100px) rotateY(0deg);
  }
  100% {
    transform: translate3d(0px, 0, 100px) rotateY(360deg);
  }
`

const Wrapper = Styled.div`
  perspective: 360px;
  width: 200px;
  height: 200px;
`
const Cube = Styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-origin: center;
  transform-style: preserve-3d;
  animation: ${rotateCube} 20s linear infinite;
`
const Side = Styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px;
  background: rgba(0,0,0, 0.2);
  transform-origin: center;
`

const Left = Styled(Side)`
  transform: translate3d(-100px, 0, 0) rotateY(90deg);
  background-color: rgba(150,0,0, 0.4);
`
const Right = Styled(Side)`
  transform: translate3d(100px, 0, 0) rotateY(90deg);
  background-color: rgba(0, 150,0, 0.4);
`
const Front = Styled(Side)`
  transform: translate3d(0px, 0, 100px);
  background-color: rgba(0,0,150, 0.4);
  /* animation: ${animateFront} 1s linear infinite; */
`
const Back = Styled(Side)`
  transform: translate3d(0, 0, -100px);
  background-color: rgba(150,150,0, 0.4);
`
const Top = Styled(Side)`
  transform: translate3d(0, -100px, 0px) rotateX(90deg);
  background-color: rgba(150,0,150, 0.4);
`
const Bottom = Styled(Side)`
  transform: translate3d(0, 100px, 0) rotateX(90deg);
  background-color: rgba(0,150,150, 0.4);
`

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: 'Loading...',
    }
  }

  componentDidMount () {
    fetch(readme)
      .then(d => d.text()) 
      .then(text => {
        this.setState({ readme: text })
      })
  }
 
  render () {
    return (
      <div>
        <Svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
        >
          <Rect width="200" height="200" side="front" />
          <Rect width="200" height="200" side="left" />
          <Rect width="200" height="200" side="back" />
          <Rect width="200" height="200" side="right" />
        </Svg>

        <Wrapper>
          <Cube>
            <Front />
            <Left />
            <Back />
            <Right />
            <Top />
            <Bottom />
          </Cube>
        </Wrapper>

        <Markdown source={ this.state.readme } />
      </div>
    )
  }
}
