import React, { Component } from 'react'
import Styled from 'styled-components'

const Wrapper = Styled.section`
  display: block;
  width: 100%;
  margin-bottom: 6rem;
`

export default class extends Component {
  render () {
    return (
      <div>
        <Wrapper>
          { this.props.children }
        </Wrapper>
      </div>
    )
  }
}