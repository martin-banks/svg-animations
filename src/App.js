import React, { Component } from 'react'
import Styled from 'styled-components'

import AppRouter from './components/router_main'


const View = Styled.div`
  margin-left: 200px;
  padding: 4rem;
`

class App extends Component {
  render() {
    return (
      <View>
        <AppRouter />
      </View>
    )
  }
}

export default App
