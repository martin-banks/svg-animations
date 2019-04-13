import React, { Component } from 'react'
import Styled, { keyframes } from 'styled-components'
import Markdown from 'react-markdown'

import notes from './notes.md'

const spinner = keyframes`
  0% {
    transform: rotateY(0deg) rotateX(0deg);
  }
  100% {
    transform: rotateY(360deg) rotateX(360deg);
  }
`

const Svg = Styled.svg`
  backface-visibility: hidden;
  transform-style: preserve-3d;
  perspective: 300px;
  width: 30vw;
`

const Circle = Styled.circle`
  fill: none;
  backface-visibility: none;
  transform-origin: center;
  stroke: lightblue;
  stroke-width: 3px;
  animation: ${spinner} 7s ease-in-out infinite alternate ${p => 3 + (p.index * 0.06)}s;
`

const Wrapper = Styled.div`
  backface-visibility: hidden;
  tranzsform-style: preserve-3d;
  perspective: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 3rem;
`

class RotatingCircles extends Component {
  constructor (props) {
    super(props)
    this.state = {
      notes: 'Loading...'
    }
  }
  componentDidMount () {
    fetch(notes)
      .then(res => res.text())
      .then(notes => this.setState({ notes }))
      .catch(console.error)
  }
  render () {
    return (
      <div>
        <Wrapper>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 300 300"
          >
            {
              [...new Array(30)].
                map((x, i) => <Circle
                  key={ `circle-${i}` }
                  cx="150"
                  cy="150"
                  r={ 150 - (5 * i) }
                  index={ i }
                />)
            }
          </Svg>
        </Wrapper>
        
        <Markdown source={ this.state.notes } />
      </div>
    )
  }
}

export default RotatingCircles
