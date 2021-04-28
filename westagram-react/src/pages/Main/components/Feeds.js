import React from "react";
import StoryBox from "./StoryBox";
import Article from "./Article";
import "./Feeds.scss";

class Feeds extends React.Component {
  render() {
    return (
      <div className="feeds">
        <StoryBox />
        <Article />
        <Article />
      </div>
    );
  }
}

export default Feeds;
