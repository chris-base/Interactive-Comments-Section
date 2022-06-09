import "./App.css";
import { useState, useEffect } from "react";
import CommentComponent from "./Components/CommentComponent";
import UserSendCommentComponent from "./Components/UserSendCommentComponent";
import data from "./data.json";

function App() {
  console.log(data);

  return (
    <div className='App'>
      <CommentComponent />

      <UserSendCommentComponent />
    </div>
  );
}

export default App;
