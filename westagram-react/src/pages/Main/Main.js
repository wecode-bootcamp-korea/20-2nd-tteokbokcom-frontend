import React from 'react'
import './Main.css'

class Component extends React.Component {
  render() {
    return (
      <>
        <nav>
          <img
            alt="logo"
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
          />
          <div class="searchBar">
            <input type="text" name="search" id="search" placeholder="검색" />
            <label class="search" for="search">
              <i class="fas fa-search"></i>
            </label>
          </div>
          <div class="linksOfMenu">
            <a href="main.html" target="_blank">
              <i aria-label="go homepage" class="fas fa-home"></i>
            </a>
            <a href="https://www.instagram.com/direct/inbox/" target="_blank">
              <i
                aria-label="send the direct message"
                class="far fa-paper-plane"
              ></i>
            </a>
            <a href="https://www.instagram.com/explore/" target="_blank">
              <i aria-label="사람 찾기" class="far fa-compass"></i>
            </a>
            <button>
              <i aria-label="활동피드" class="far fa-heart"></i>
            </button>
            <a href="">
              <img
                alt="userProfile"
                src="https://raw.githubusercontent.com/celline1637/1/main/%ED%88%AC%EB%AA%85%EA%B3%B0.png"
                class="menu userProfile"
              />
            </a>
          </div>
        </nav>
        <main>
          <div class="feeds">
            <ul class="storyBox">
              <li class="story">
                <div class="userPic"></div>
                <p>user name</p>
              </li>
              <li class="story">
                <div class="userPic"></div>
                <p>user name</p>
              </li>
              <li class="story">
                <div class="userPic"></div>
                <p>user name</p>
              </li>
              <li class="story">
                <div class="userPic"></div>
                <p>user name</p>
              </li>
              <li class="story">
                <div class="userPic"></div>
                <p>user name</p>
              </li>
              <li class="story">
                <div class="userPic"></div>
                <p>user name</p>
              </li>
              <li class="story">
                <div class="userPic"></div>
                <p>user name</p>
              </li>
              <li class="story">
                <div class="userPic"></div>
                <p>user name</p>
              </li>
            </ul>
            <article>
              <header>
                <div class="userPic header"></div>
                <p class="userID">dory</p>
                <button>
                  <div></div>
                  <div></div>
                  <div></div>
                </button>
              </header>
              <img alt="posted img" src="" class="photo" />
              <section class="feedOptions">
                <button>
                  <i class="far fa-heart"></i>
                </button>
                <button>
                  <i class="far fa-heart"></i>
                </button>
                <button>
                  <i class="far fa-heart"></i>
                </button>
                <button>
                  <i class="far fa-heart"></i>
                </button>
              </section>
              <div class="photoInfo">
                <p class="numOfLikes">
                  좋아요 &nbsp;<span>123</span>개
                </p>
                <p class="userID">dory</p>
                <p>존맛탱 감자조림</p>
              </div>
              <div class="comments">
                <ul class="commentList">
                  <li class="comment invisible">
                    <span class="ID">아이디</span>
                    <span class="CM">댓글이다!</span>
                    <span>
                      <i class="far fa-heart"></i>
                    </span>
                  </li>
                </ul>
                <form action="" method="POST">
                  <button>
                    <i class="far fa-heart"></i>
                  </button>
                  <input
                    class="commentInput"
                    name="commentInput"
                    method="post"
                    type="text"
                    placeholder="댓글 달기 ..."
                  />
                  <button type="submit" class="commentBtn" disabled>
                    게시
                  </button>
                </form>
              </div>
            </article>
            <article>
              <header>
                <div class="userPic header"></div>
                <p class="userID">dory</p>
                <button>
                  <div></div>
                  <div></div>
                  <div></div>
                </button>
              </header>
              <img alt="posted img" src="" class="photo" />
              <section class="feedOptions">
                <button>
                  <i class="far fa-heart"></i>
                </button>
                <button>
                  <i class="far fa-heart"></i>
                </button>
                <button>
                  <i class="far fa-heart"></i>
                </button>
                <button>
                  <i class="far fa-heart"></i>
                </button>
              </section>
              <div class="photoInfo">
                <p class="numOfLikes">
                  좋아요 &nbsp;<span>123</span>개
                </p>
                <p class="userID">dory</p>
                <p>존맛탱 감자조림</p>
              </div>
              <div class="comments">
                <ul class="commentList">
                  <li class="comment invisible">
                    <span class="ID">아이디</span>
                    <span class="CM">댓글이다!</span>
                    <span>
                      <i class="far fa-heart"></i>
                    </span>
                  </li>
                </ul>
                <form action="" method="POST">
                  <button>
                    <i class="far fa-heart"></i>
                  </button>
                  <input
                    class="commentInput"
                    name="commentInput"
                    method="post"
                    type="text"
                    placeholder="댓글 달기 ..."
                  />
                  <button type="submit" class="commentBtn" disabled>
                    게시
                  </button>
                </form>
              </div>
            </article>
          </div>
          <aside class="main-right">
            <div class="userProfileBox">
              <img
                alt="userProfile"
                src="https://raw.githubusercontent.com/celline1637/1/main/%ED%88%AC%EB%AA%85%EA%B3%B0.png"
              />
              <div class="userInfo">
                <p>celline2508</p>
                <p class="userMessage">🎆🌌✨</p>
              </div>
              <button aria-label="계정 전환">전환</button>
            </div>
            <div class="recommendTitle">
              <span>회원님을 위한 추천</span>
              <span>모두 보기</span>
            </div>
            <div class="recommendation">
              <img
                alt="userProfile"
                src="https://raw.githubusercontent.com/celline1637/1/main/%ED%88%AC%EB%AA%85%EA%B3%B0.png"
              />
              <div class="userInfo">
                <p>celline2508</p>
                <p class="userMessage">Instagram 신규 가입</p>
              </div>
              <button aria-label="팔로우">팔로우</button>
            </div>
            <div class="recommendation">
              <img
                alt="userProfile"
                src="https://raw.githubusercontent.com/celline1637/1/main/%ED%88%AC%EB%AA%85%EA%B3%B0.png"
              />
              <div class="userInfo">
                <p>celline2508</p>
                <p class="userMessage">회원님을 위한 추천</p>
              </div>
              <button aria-label="팔로우">팔로우</button>
            </div>
            <div class="recommendation">
              <img
                alt="userProfile"
                src="https://raw.githubusercontent.com/celline1637/1/main/%ED%88%AC%EB%AA%85%EA%B3%B0.png"
              />
              <div class="userInfo">
                <p>celline2508</p>
                <p class="userMessage">dory님 외 1명이 팔로우합니다</p>
              </div>
              <button aria-label="팔로우">팔로우</button>
            </div>
            <div class="recommendation">
              <img
                alt="userProfile"
                src="https://raw.githubusercontent.com/celline1637/1/main/%ED%88%AC%EB%AA%85%EA%B3%B0.png"
              />
              <div class="userInfo">
                <p>celline2508</p>
                <p class="userMessage">hihi님 외 2명이 팔로우합니다</p>
              </div>
              <button aria-label="팔로우">팔로우</button>
            </div>
            <footer>
              <div class="links">
                소개 ・ 도움말 ・ 홍보 센터 ・ API ・ 채용 정보
                ・개인정보처리방침 ・ 약관 ・ 위치 ・ 인기 계정 ・ 해시태그 ・
                언어
              </div>
              <div class="copyright">© 2021 INSTAGRAM FROM FACEBOOK</div>
            </footer>
          </aside>
        </main>
      </>
    )
  }
}

export default Component
