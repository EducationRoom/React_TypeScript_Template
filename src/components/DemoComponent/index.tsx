import React from 'react'

interface DemoComponentProps {
  text: string
}

const DemoComponent: React.FC<DemoComponentProps> = ({text}) => {
  return (
    <React.Fragment>
      <h1>{text}</h1>
    </React.Fragment>
  )
}

export default DemoComponent
