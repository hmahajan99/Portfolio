import React, { useState, useEffect } from "react";

import ChatButton from "../ChatButton/ChatButton.js";
import ChatBox from "../ChatBox/ChatBox.js";

import "./ChatContainer.scss";

function ChatContainer () {
  // CHAT V1
  // TODO
  // 1. make a check for invalid session (5 min timeout --- error msg) => create session again
  // 2. fix overflow on verrrrrrrrrrrrrrrrylongwooooooooooooord
  // 3. delete session
  const [chatOpen, toggleChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [sessionId, setSessionId] = useState("");

  function addMessage(message){
    setMessages(messages => [message, ...messages] )
  }

  function handleClick(){
    toggleChat(!chatOpen);
  }

  function createNewSession(){
    fetch('/createsession', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
    })
    .then(response => response.json())
    .then(response => {
      setSessionId(response.sessionId);
    })    
  }

  useEffect(()=>{
    createNewSession();
  },[])

  return (
    <div className="chat-container">
      { chatOpen && 
        <ChatBox 
          addMessage={addMessage} 
          messages={messages}
          sessionId={sessionId} 
        />
      }
      <ChatButton handleClick={handleClick} />
    </div>
  );
}

export default ChatContainer;