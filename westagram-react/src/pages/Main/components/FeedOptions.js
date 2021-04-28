import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./FeedOptions.scss";

// let [likes, addLikes] = useState(0)

// class FeedOptions extends React.Component {

//   render() {
//     return (
//       <section className="feedOptions">
//         <button>
//           <FontAwesomeIcon icon={faHeart} />
//         </button>
//         <button>
//           <FontAwesomeIcon icon={faHeart} />
//         </button>
//         <button>
//           <FontAwesomeIcon icon={faHeart} />
//         </button>
//         <span>{likes}</span>
//         <button
//           onClick={() => {
//             addLikes(likes + 1)
//           }}
//         >
//           <FontAwesomeIcon icon={faHeart} />
//         </button>
//       </section>
//     )
//   }
// }

class FeedOptions extends React.Component {
  render() {
    return (
      <section className="feedOptions">
        <button>
          <FontAwesomeIcon icon={faHeart} />
        </button>
        <button>
          <FontAwesomeIcon icon={faHeart} />
        </button>
        <button>
          <FontAwesomeIcon icon={faHeart} />
        </button>

        <button>
          <FontAwesomeIcon icon={faHeart} />
        </button>
      </section>
    );
  }
}

export default FeedOptions;
