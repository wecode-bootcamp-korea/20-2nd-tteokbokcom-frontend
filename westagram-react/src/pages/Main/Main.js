import React from "react";

import Nav from "./components/Nav";
import Feeds from "./components/Feeds";
import MainRight from "./components/MainRight";
import "./Main.scss";

class Component extends React.Component {
  render() {
    return (
      <div className="main">
        <Nav />
        <main>
          <Feeds />
          <MainRight />
        </main>
      </div>
    );
  }
}

export default Component;
