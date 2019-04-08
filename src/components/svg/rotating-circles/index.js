import React, { Component } from 'react'
import Styled, { keyframes } from 'styled-components'
// import style from './index.css'

const spinner = keyframes`
  0% {
    transform: translate3d(0,0,0) rotateX(0) rotateY(0);
  }
  100% {
    transform: translate3d(0,0,0) rotateX(180deg) rotateY(180deg);
  }
`

const Circle = Styled.circle`
  fill: none;
  backface-visibility: none;
  transform-origin: center;
  `

const Circle_1 = Styled(Circle)`
  stroke: navy;
  stroke-width: 30px;
  animation: ${spinner} 5s linear infinite;
`
const Circle_2 = Styled(Circle)`
  stroke: cornflowerblue;
  stroke-width: 20px;
  animation: ${spinner} 3s linear infinite;
`
const Circle_3 = Styled(Circle)`
  stroke: lightblue;
  stroke-width: 10px;
  animation: ${spinner} 2s linear infinite;
`

const Svg = Styled.svg`
  backface-visibility: hidden;
  perspective: 180px;
  width: 30vw;
`

const Wrapper = Styled.div`
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`


class RotatingCircles extends Component {
  render () {
    return (
      <Wrapper>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 300"
        >
          <Circle_3 cx="150" cy="150" r="50" />
          <Circle_2 cx="150" cy="150" r="100" />
          <Circle_1 cx="150" cy="150" r="150" />
        </Svg>
      </Wrapper>
    )
  }
}

export default RotatingCircles
