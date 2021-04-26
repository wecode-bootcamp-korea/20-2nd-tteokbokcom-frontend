import React from 'react'
import './Login.css'

class Component extends React.Component {
  render() {
    return (
      <>
        <article>
          <div class="login">
            <h1>Westagram</h1>
            <form action="../main/main.html" class="loginForm">
              <div class="enter">
                <label for="id" class="form-description">
                  전화번호, 사용자 이름 또는 이메일
                </label>
                <input
                  class="input ID"
                  type="text"
                  aria-label="전화번호, 사용자 이름 또는 이메일"
                  name="userName"
                  id="id"
                  minlength="1"
                  required
                />
              </div>
              <div class="enter">
                <label for="pw" class="form-description">
                  {' '}
                  비밀번호{' '}
                </label>
                <input
                  class="input PW"
                  id="pw"
                  name="pw"
                  type="password"
                  aria-label="비밀번호"
                  minlength="1"
                  required
                />
              </div>
              <button type="submit" class="login btn" disabled>
                로그인
              </button>
              <div class="loginOption">
                <p>또는</p>
              </div>
              <a
                class="facebook"
                href="https://m.facebook.com/?locale2=ko_KR"
                target="_blank"
              >
                <img src="/public/images/facebook.png" alt="facebook logo" />
                <span>Facebook으로 로그인</span>
              </a>
            </form>
            <a href="" class="forgotPW">
              비밀번호를 잊으셨나요?
            </a>
          </div>
          <div class="create-account">
            <p>
              계정이 없으신가요?
              <a href="">
                <span>가입하기</span>
              </a>
            </p>
          </div>
          <script src="login.js"></script>
        </article>
      </>
    )
  }
}

export default Component
