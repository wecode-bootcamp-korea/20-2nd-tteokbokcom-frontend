import React from 'react'

class Component extends React.Component {
  render() {
    return (
      <div className="photoInfo">
        <p className="numOfLikes">
          좋아요 &nbsp;<span>123</span>개
        </p>
        <p className="userID">dory</p>
        <p>존맛탱 감자조림</p>
      </div>
    )
  }
}

export default Component
