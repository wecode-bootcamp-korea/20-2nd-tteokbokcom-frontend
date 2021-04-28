import React from "react";
import Story from "./Story";
import "./StoryBox.scss";

class StoryBox extends React.Component {
  render() {
    return (
      <ul className="storyBox">
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
      </ul>
    );
  }
}

export default StoryBox;
