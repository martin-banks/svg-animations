import React, { Component } from 'react'
import { BrowserRouter as Router , Route, Link } from 'react-router-dom'
import Styled from 'styled-components'

import Sidebar from './router_sidebar'

import ViewHome from '../views/home'
import SvgRotatingCircles from './svg/rotating-circles/'
import SvgDrawPath from './svg/draw-path/'

const Label = Styled.span`
  display: block;
  padding: 0;
  list-style: none;
  margin: 0;
  padding: 1rem 3rem;
  :hover {
    background: rgba(0,0,0, 0.1);
  }
`

const Ul = Styled.ul`
  margin: 0;
  padding: 0;
  padding-top: 2rem;
`

class AppRouter extends Component {

  render () {
    return (
      <Router>
        <Sidebar>
          <nav>
            <Ul>
              <li>
                <Link to="/">
                  <Label>Home</Label></Link></li>
              <hr/>

              <li>
                <Link to="/rotating-circles">
                  <Label>Rotating circles</Label>
                </Link>
              </li>
              <li>
                <Link to="/draw-path">
                  <Label>Draw path</Label>
                </Link>
              </li>

            </Ul>
          </nav>
        </Sidebar>

        {/* Defines components to render for each route */}
        <Route
          path="/"
          exact
          component={ ViewHome }
        />
        <Route
          path="/rotating-circles"
          exact
          component={ SvgRotatingCircles }
        />
        <Route
          path="/draw-path"
          exact 
          component={ SvgDrawPath }
        />
      </Router>
    )
  }
}

export default AppRouter
