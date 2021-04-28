import React from "react";
import Header from "./Header";
import FeedOptions from "./FeedOptions";
import PhotoInfo from "./PhotoInfo";
import Comments from "./Comments";
import "./Article.scss";

class Article extends React.Component {
  render() {
    return (
      <article>
        <Header />
        <img alt="posted img" src="" className="photo" />
        <FeedOptions />
        <PhotoInfo />
        <Comments />
      </article>
    );
  }
}

export default Article;
