import React, { Component } from 'react'
import Styled from 'styled-components'

export default class extends Component {

  render () {
    return (
      <div>
        <div className="container container--realistic">
          <div className="frame frame--ani frame--preserve-3d">
            <div className="door door--ani"></div>
          </div>
        </div>
      </div>
    )
  }
}
