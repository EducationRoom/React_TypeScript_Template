import React from 'react'

import DemoComponent from 'Components/DemoComponent'
// const reactLogo = require('./../assets/img/react_logo.svg')
import './assets/scss/App.scss'

const App: React.FC = () => {
  return (
    <React.Fragment>
      <DemoComponent text="This!!!! is DemoComponent!!!" />
    </React.Fragment>
  )
}

export default App
