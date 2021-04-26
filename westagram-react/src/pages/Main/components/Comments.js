import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

class Component extends React.Component {
  render() {
    return (
      <div className="comments">
        <ul className="commentList">
          <li className="comment invisible">
            <span className="ID">아이디</span>
            <span className="CM">댓글이다!</span>
            <span>
              <FontAwesomeIcon icon={faHeart} />
            </span>
          </li>
        </ul>
        <form action="" method="POST">
          <button>
            <FontAwesomeIcon icon={faHeart} />
          </button>
          <input
            className="commentInput"
            name="commentInput"
            method="post"
            type="text"
            placeholder="댓글 달기 ..."
          />
          <button type="submit" className="commentBtn" disabled>
            게시
          </button>
        </form>
      </div>
    )
  }
}

export default Component
