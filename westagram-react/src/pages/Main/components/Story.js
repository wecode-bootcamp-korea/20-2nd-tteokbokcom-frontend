import React from "react";
import "./Story.scss";

class Story extends React.Component {
  render() {
    return (
      <li className="story">
        <div className="userPic"></div>
        <p>user name</p>
      </li>
    );
  }
}

export default Story;
