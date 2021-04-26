import React from 'react'
import Nav from './components/Nav'
import Feeds from './components/Feeds'
import MainRight from './components/MainRight'
import './Main.css'

class Component extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <main>
          <Feeds />
          <MainRight />
        </main>
      </>
    )
  }
}

export default Component
