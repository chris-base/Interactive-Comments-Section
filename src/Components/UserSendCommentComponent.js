import { useState } from "react";
import "../Styles/UserSendCommentStyles.css";
import AddEditCommentFormComponent from "./AddEditCommentFormComponent";
import data from "../data.json";
import userImg from "./assets/avatars/image-juliusomo.png";
import userImgWebp from "./assets/avatars/image-juliusomo.webp";

const UserSendCommentComponent = ({ replyingToUser, replyBoxOpen, setReplyBoxOpen, forceUpdate, setForceUpdate, index }) => {
  const [commentText, setCommentText] = useState("");

  const countDataID = () => {
    let count = 0;

    for (let i = 0; i < data.comments.length; i++) {
      count++;

      count += data.comments[i].replies.length;
    }

    return count + 1;
  };

  const addCommentToData = () => {
    if (commentText.length > 1) {
      if (replyingToUser.length > 1) {
        data.comments[index].replies.push({
          id: countDataID(),
          content: commentText,
          createdAt: "Today",
          score: 0,
          replyingTo: replyingToUser,
          user: {
            image: {
              png: userImg,
              webp: userImgWebp,
            },
            username: data.currentUser.username,
          },
        });

        setReplyBoxOpen(false);
        console.log(data.comments);
      } else {
        data.comments.push({
          id: countDataID(),
          content: commentText,
          createdAt: "Today",
          score: 0,
          user: {
            image: {
              png: userImg,
              webp: userImgWebp,
            },
            username: data.currentUser.username,
          },
          replies: [],
        });
      }

      setCommentText("");
      setForceUpdate(!forceUpdate);
    }
  };

  return (
    <div id='currUserContainer'>
      <div id='currentUserImg' style={{ backgroundImage: "url(" + userImg + ")" }}></div>

      <AddEditCommentFormComponent addingComment={true} replyBoxOpen={replyBoxOpen} commentText={commentText} setCommentText={setCommentText} />

      <div id='sendCancelContainer'>
        <div id='sendCommentButton' onClick={() => addCommentToData()}>
          {replyingToUser.length > 0 ? "REPLY" : "SEND"}
        </div>
        {replyingToUser !== "" ? (
          <div id='cancelCommentButton' onClick={() => setReplyBoxOpen(false)}>
            CANCEL
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default UserSendCommentComponent;
