import React, { Component } from 'react'
import Markdown from 'react-markdown'

import readme from './README.md'

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      readme: 'Loading ...'
    }
  }
  componentDidMount () {
    fetch(readme)
      .then(response => response.text())
      .then(text => this.setState({ readme: text }))
      .catch(console.error)
  }
  render () {
    return (
      <div>
        <Markdown source={ this.state.readme } />
      </div>
    )
  }
}
