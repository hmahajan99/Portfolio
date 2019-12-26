import React, { useState } from "react";

import ChatButton from "../ChatButton/ChatButton.js";
import ChatBox from "../ChatBox/ChatBox.js";

import "./ChatContainer.scss";

function ChatContainer () {
  const [chatOpen, toggleChat] = useState(false);
  return (
    <div className="chat-container" onClick={()=>toggleChat(!chatOpen)}>
      {chatOpen && <ChatBox />}
      <ChatButton />
    </div>
  );
}

export default ChatContainer;