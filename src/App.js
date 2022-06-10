import "./App.css";
import { useState, useEffect } from "react";
import CommentComponent from "./Components/CommentComponent";
import UserSendCommentComponent from "./Components/UserSendCommentComponent";
import data from "./data.json";

function App() {
  return (
    <div className='App'>
      {data.comments.map((comment, index) => {
        return <CommentComponent comment={comment} index={index} key={index} />;
      })}

      <UserSendCommentComponent />
    </div>
  );
}

export default App;
