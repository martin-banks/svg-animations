import React, { Component } from 'react'

class RotatingCircles extends Component {
  render () {
    return (
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 300"
        >
          <circle className="cls-1" cx="150" cy="150" r="150"/>
          <circle className="cls-1" cx="150" cy="150" r="100"/>
          <circle className="cls-1" cx="150" cy="150" r="50"/>
        </svg>
        {/* <style jsx="true">
          .cls-1 {
            fill: #fff;
            stroke: red;
            stroke-width: 1px;
          }
        </style> */}
      </div>
    )
  }
}

export default RotatingCircles
