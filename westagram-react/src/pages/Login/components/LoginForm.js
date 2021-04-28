import React from "react";
import "./LoginForm.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

class Component extends React.Component {
  render() {
    return (
      <form action="../main/main.html" className="loginForm">
        <div className="enter">
          <label htmlFor="id" className="form-description">
            전화번호, 사용자 이름 또는 이메일
          </label>
          <input
            className="input ID"
            type="text"
            aria-label="전화번호, 사용자 이름 또는 이메일"
            name="userName"
            id="id"
            minLength="1"
            required
          />
        </div>
        <div className="enter">
          <label htmlFor="pw" className="form-description">
            {" "}
            비밀번호{" "}
          </label>
          <input
            className="input PW"
            id="pw"
            name="pw"
            type="password"
            aria-label="비밀번호"
            minLength="1"
            required
          />
        </div>
        <button type="submit" className="login btn" disabled onClick>
          로그인
        </button>
        <div className="loginOption">
          <p>또는</p>
        </div>
        <a
          className="facebook"
          href="https://m.facebook.com/?locale2=ko_KR"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={["fab", "facebook"]}
            color="rgb(56, 81, 133)"
          />
          <span>Facebook으로 로그인</span>
        </a>
      </form>
    );
  }
}

export default Component;
