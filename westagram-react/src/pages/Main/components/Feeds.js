import React from 'react'
import StoryBox from './StoryBox'
import Article from './Article'

class Component extends React.Component {
  render() {
    return (
      <div className="feeds">
        <StoryBox />
        <Article />
        <Article />
      </div>
    )
  }
}

export default Component
