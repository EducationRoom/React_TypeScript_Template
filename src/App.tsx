import React from 'react'
import './assets/scss/App.scss'

import ReactLogo from './assets/img/react_logo.svg'
import DemoComponent from 'Components/DemoComponent'

const App: React.FC = () => {
  return (
    <React.Fragment>
      <DemoComponent text="This!!!! is DemoComponent!!!" />
      <ReactLogo fill="lightblue" width="40px" />
    </React.Fragment>
  )
}

export default App
