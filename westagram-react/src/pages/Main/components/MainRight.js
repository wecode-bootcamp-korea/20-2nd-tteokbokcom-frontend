import React from "react";
import UserProfileBox from "./UserProfileBox";
import RecommendTitle from "./RecommendTitle";
import Recommendation from "./Recommendation.js";
import Footer from "./Footer";
import "./MainRight.scss";

class MainRight extends React.Component {
  render() {
    return (
      <aside className="main-right">
        <UserProfileBox />
        <RecommendTitle />
        <Recommendation />
        <Recommendation />
        <Recommendation />
        <Recommendation />
        <Footer />
      </aside>
    );
  }
}

export default MainRight;
