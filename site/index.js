import React, { Component } from 'react'
import { render } from 'react-dom'
import Tigress from './components/Tigress'

class App extends Component {
  render () {
    return (
      <div>
        <Tigress />
      </div>
    )
  }
}

render((
  <App />
), document.getElementById('root'))
