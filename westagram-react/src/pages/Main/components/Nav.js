import React from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { search } from "@fortawesome/free-solid-svg-icons";

library.add();

class Component extends React.Component {
  goToLogin = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <nav>
        <img
          alt="logo"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
          onClick={this.goToLogin}
        />
        <div className="searchBar">
          <input type="text" name="search" id="search" placeholder="검색" />
          <label className="search" htmlFor="search">
            <FontAwesomeIcon icon={["fas", "search"]} />
          </label>
        </div>
        <div className="linksOfMenu">
          <a href="main.html" target="_blank">
            <i aria-label="go homepage" className="fas fa-home"></i>
          </a>
          <a href="https://www.instagram.com/direct/inbox/" target="_blank">
            <i
              aria-label="send the direct message"
              className="far fa-paper-plane"
            ></i>
          </a>
          <a href="https://www.instagram.com/explore/" target="_blank">
            <i aria-label="사람 찾기" className="far fa-compass"></i>
          </a>
          <button>
            <i aria-label="활동피드" className="far fa-heart"></i>
          </button>
          <a href="">
            <img
              alt="userProfile"
              src="https://raw.githubusercontent.com/celline1637/1/main/%ED%88%AC%EB%AA%85%EA%B3%B0.png"
              className="menu userProfile"
            />
          </a>
        </div>
      </nav>
    );
  }
}

export default withRouter(Component);
