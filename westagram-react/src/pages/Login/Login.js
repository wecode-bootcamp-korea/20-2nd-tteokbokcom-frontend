import React from 'react'
import './Login.css'
import LoginSection from './components/LoginSection'
import CreateAccount from './components/CreateAccount'

class Component extends React.Component {
  render() {
    return (
      <>
        <article>
          <LoginSection />
          <CreateAccount />
        </article>
      </>
    )
  }
}

export default Component
