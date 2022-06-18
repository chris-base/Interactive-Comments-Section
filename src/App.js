import "./App.css";
import { useState } from "react";
import CommentComponent from "./Components/CommentComponent";
import UserSendCommentComponent from "./Components/UserSendCommentComponent";
import data from "./data.json";

function App() {
  const [forceUpdate, setForceUpdate] = useState(false);

  return (
    <div className='App'>
      {data.comments.map((comment, index) => {
        return <CommentComponent comment={comment} forceUpdate={forceUpdate} setForceUpdate={setForceUpdate} index={index} key={index} />;
      })}

      <UserSendCommentComponent replyingToUser={""} forceUpdate={forceUpdate} setForceUpdate={setForceUpdate} />
    </div>
  );
}

export default App;
