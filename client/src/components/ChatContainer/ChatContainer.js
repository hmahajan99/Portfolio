import React, { useState } from "react";

import ChatButton from "../ChatButton/ChatButton.js";
import ChatBox from "../ChatBox/ChatBox.js";

import "./ChatContainer.scss";

function ChatContainer () {

  // TODO: make a check for invalid session => create session again

  const [chatOpen, toggleChat] = useState(true);
  const [messages, setMessages] = useState([]);

  function addMessage(message){
    setMessages(messages => [message, ...messages] )
  }

  function handleClick(){
    toggleChat(!chatOpen);
  }

  return (
    <div className="chat-container">
      {chatOpen && <ChatBox addMessage={addMessage} messages={messages} />}
      <ChatButton handleClick={handleClick} />
    </div>
  );
}

export default ChatContainer;