import React, { Component } from 'react'
import { BrowserRouter as Router , Route, Link } from 'react-router-dom'
import Styled from 'styled-components'

import Sidebar from './router_sidebar'

import ViewHome from '../views/home'
import GettingStarted from '../views/getting-started'

import SvgRotatingCircles from './svg/rotating-circles/'
import SvgDrawPath from './svg/draw-path/'
import SvgMarchingAnts from './svg/marching-ants/'
import SvgWeatherLightening from './svg/weather-lightening/'
import SvgAnimatedWord from './svg/animated-word/'
import SvgRainbow from './svg/weather-rainbow/'
import SvgSnow from './svg/weather-snow/'
import SvgCube from './svg/cube/'
import SvgBouncingBall from './svg/bouncing-ball/'
import SvgBezier from './svg/bezier/'
import RouteMap from './svg/route-map/'


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

const ViewWrapper = Styled.section`
  position: relative;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  max-width: 1000px;
`

class AppRouter extends Component {

  render () {
    return (
      <Router>
        <Sidebar>
          <nav>
            <Ul>
              <li><Link to="/">
                <Label>Home</Label>
              </Link></li>
              <li><Link to="/getting-started">
                <Label>Getting started</Label>
              </Link></li>
              <hr/>

              <li>
                <Link to="/rotating-circles"><Label>Rotating circles</Label></Link>
              </li>
              <li>
                <Link to="/draw-path"><Label>Draw path</Label>  </Link>
              </li>
              <li>
                <Link to="/marching-ants"><Label>Marching ants</Label></Link>
              </li>
              <li>
                <Link to="/animated-word"><Label>Animated word</Label></Link>
              </li>
              <li>
                <Link to="/weather-lightening"><Label>Weather: lightening</Label></Link>
              </li>
              <li>
                <Link to="/weather-rainbow"><Label>Weather: rainbow</Label></Link>
              </li>
              <li>
                <Link to="/weather-snow"><Label>Weather: snow</Label></Link>
              </li>
              <li>
                <Link to="/cube"><Label>Cube</Label></Link>
              </li>
              <li>
                <Link to="/bouncing-ball"><Label>Bouncing ball</Label></Link>
              </li>
              <li>
                <Link to="/bezier-curve"><Label>Bezier curve</Label></Link>
              </li>
              <li>
                <Link to="/route-map"><Label>Route map</Label></Link>
              </li>

            </Ul>
          </nav>
        </Sidebar>

        {/* Defines components to render for each route */}

        <ViewWrapper>
          <Route
            path="/"
            exact
            component={ ViewHome }
          />
          <Route
            path="/getting-started"
            exact
            component={ GettingStarted }
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
          <Route
            path="/marching-ants"
            exact 
            component={ SvgMarchingAnts }
          />
          <Route
            path="/weather-lightening"
            exact 
            component={ SvgWeatherLightening }
          />
          <Route
            path="/animated-word"
            exact 
            component={ SvgAnimatedWord }
          />
          <Route
            path="/weather-rainbow"
            exact 
            component={ SvgRainbow }
          />
          <Route
            path="/weather-snow"
            exact 
            component={ SvgSnow }
          />
          <Route
            path="/cube"
            exact 
            component={ SvgCube }
          />
          <Route
            path="/bouncing-ball"
            exact 
            component={ SvgBouncingBall }
          />
          <Route
            path="/bezier-curve"
            exact 
            component={ SvgBezier }
          />
          <Route
            path="/route-map"
            exact 
            component={ RouteMap }
          />
        </ViewWrapper>
      </Router>
    )
  }
}

export default AppRouter
