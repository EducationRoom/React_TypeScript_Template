import * as React from 'react'
import {hot} from 'react-hot-loader'

const reactLogo = require('./../assets/img/react_logo.svg')
import './../assets/scss/App.scss'

const App: React.SFC = () => {
  return (
    <React.Fragment>
      <h1>WOO React APP!!</h1>
    </React.Fragment>
  )
}

declare let module: Record<string, unknown>

export default hot(module)(App)
