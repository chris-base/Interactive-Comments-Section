import "../Styles/CommentInfoReplyComponentStyles.css";

const CommentInfoReplyComponent = () => {
  return (
    <div id='commentInfoReplyContainer'>
      <div id='commentInfoContainer'>
        <img id='userImg' src='.../assets/avatars/image-amyrobson.png'></img>
        <p id='userName'>amyrobson</p>
        <p id='commentTime'>1 week ago</p>
      </div>

      <div id='replyContainer'>
        <button id='replyButtonContainer'>
          <img id='replyImg' src='.../assets/icon-reply.svg'></img>
          <p id='replyText'>Reply</p>
        </button>
      </div>
    </div>
  );
};

export default CommentInfoReplyComponent;
