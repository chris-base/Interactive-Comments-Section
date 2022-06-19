import "./App.css";
import { useState } from "react";
import CommentComponent from "./Components/CommentComponent";
import UserSendCommentComponent from "./Components/UserSendCommentComponent";
import DeleteCommentComponent from "./Components/DeleteCommentComponent";
import data from "./data.json";

function App() {
  const [forceUpdate, setForceUpdate] = useState(false);
  const [deleteCommentVisible, setDeleteCommentVisible] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState([-1, -1]);

  return (
    <div className='App'>
      {data.comments.map((comment, index) => {
        return (
          <CommentComponent
            comment={comment}
            forceUpdate={forceUpdate}
            setForceUpdate={setForceUpdate}
            setDeleteIndex={setDeleteIndex}
            setDeleteCommentVisible={setDeleteCommentVisible}
            index={index}
            key={index}
          />
        );
      })}

      <DeleteCommentComponent
        deleteIndex={deleteIndex}
        setDeleteIndex={setDeleteIndex}
        deleteCommentVisible={deleteCommentVisible}
        setDeleteCommentVisible={setDeleteCommentVisible}
      />

      <UserSendCommentComponent replyingToUser={""} forceUpdate={forceUpdate} setForceUpdate={setForceUpdate} />
    </div>
  );
}

export default App;
