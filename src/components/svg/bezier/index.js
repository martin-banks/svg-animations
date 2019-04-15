import React, { Component } from 'react'
import Styled from 'styled-components'
import Markdown from 'react-markdown'

import Demo from '../../demo'

import readme from './README.md'

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      readme: 'Loading...',
    }
  }
  componentDidMount () {
    fetch(readme)
      .then(res => res.text())
      .then(text => this.setState({ readme: text }))
      .catch(console.error)
  }
  render () {
    return (
      <div>
        <Demo>
          <svg
            width="600"
            viewBox="0 0 300 150"
          >
            <path d="M10 10 C 20 20, 40 20, 50 10" stroke="black" fill="transparent"/>
            <path d="M70 10 C 70 20, 120 20, 120 10" stroke="black" fill="transparent"/>
            <path d="M130 10 C 120 20, 180 20, 170 10" stroke="black" fill="transparent"/>
            <path d="M10 60 C 20 80, 40 80, 50 60" stroke="black" fill="transparent"/>
            <path d="M70 60 C 70 80, 110 80, 110 60" stroke="black" fill="transparent"/>
            <path d="M130 60 C 120 80, 180 80, 170 60" stroke="black" fill="transparent"/>
            <path d="M10 110 C 20 140, 40 140, 50 110" stroke="black" fill="transparent"/>
            <path d="M70 110 C 70 140, 110 140, 110 110" stroke="black" fill="transparent"/>
            <path d="M130 110 C 120 140, 180 140, 170 110" stroke="black" fill="transparent"/>
          </svg>
        </Demo>
        
        <Markdown source={ this.state.readme } />
      </div>
    )
  }
}
