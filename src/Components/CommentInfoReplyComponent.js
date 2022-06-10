import "../Styles/CommentInfoReplyComponentStyles.css";
import amyrobson from "./assets/avatars/image-amyrobson.png";
import juliusomo from "./assets/avatars/image-juliusomo.png";
import maxblagun from "./assets/avatars/image-maxblagun.png";
import ramsesmiron from "./assets/avatars/image-ramsesmiron.png";
import replyImg from "./assets/icon-reply.svg";

const images = {
  amyrobson: amyrobson,
  juliusomo: juliusomo,
  maxblagun: maxblagun,
  ramsesmiron: ramsesmiron,
};

const CommentInfoReplyComponent = ({ commentUser, commentDate }) => {
  return (
    <div id='commentInfoReplyContainer'>
      <div id='commentInfoContainer'>
        <div id='userImg' style={{ backgroundImage: "url(" + images[`${commentUser}`] + ")" }}></div>
        <p id='userName'>{commentUser}</p>
        <p id='commentTime'>{commentDate}</p>
      </div>

      <div id='replyContainer'>
        <button id='replyButtonContainer'>
          <div id='replyImg' style={{ backgroundImage: "url(" + replyImg + ")" }}></div>
          <p id='replyText'>Reply</p>
        </button>
      </div>
    </div>
  );
};

export default CommentInfoReplyComponent;
