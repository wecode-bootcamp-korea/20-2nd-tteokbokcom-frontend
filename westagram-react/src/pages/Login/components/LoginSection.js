import React from 'react'
import LoginForm from './LoginForm'

class Component extends React.Component {
  render() {
    return (
      <div className="login">
        <h1>Westagram</h1>
        <LoginForm />
        <a href="" className="forgotPW">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    )
  }
}

export default Component
