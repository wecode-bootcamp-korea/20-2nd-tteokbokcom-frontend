import React from 'react'

class Component extends React.Component {
  render() {
    return (
      <div className="userProfileBox">
        <img
          alt="userProfile"
          src="https://raw.githubusercontent.com/celline1637/1/main/%ED%88%AC%EB%AA%85%EA%B3%B0.png"
        />
        <div className="userInfo">
          <p>celline2508</p>
          <p className="userMessage">🎆🌌✨</p>
        </div>
        <button aria-label="계정 전환">전환</button>
      </div>
    )
  }
}

export default Component
