/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from "react";

import {
  Button,
  Card,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";

import "./ChatBox.scss";

function MessageBox({message: {text, sender}}) {
  return (
    <Button 
      className="btn-round mr-1" 
      color="danger" 
      type="text" 
      style={
        { textTransform: "none", 
          fontSize: "small", 
          fontWeight: "400",
          marginBottom: "5px",
          textAlign: sender==="bot"?"left":"right",
          wordWrap: "break-word"
        }}
    >
      { sender === "bot" && <span style={{fontSize: "150%"}}>😃: </span> }
      {text}
    </Button>
  );
}

function InputBox({inputText, setInputText, keyPressed, sendMessage}) {
  return (
    <div>
      <InputGroup className="form-group-no-border">
        <InputGroupAddon 
          addonType="prepend" 
          className="send-button"
          onClick={sendMessage} 
          >
          <InputGroupText className="grptxt" >
            <i className="nc-icon nc-send" />
          </InputGroupText>
        </InputGroupAddon>
        <Input 
          type="text" 
          value={inputText} 
          onChange={(event)=>setInputText(event.target.value)}  
          onKeyPress={keyPressed}
        />
      </InputGroup>
    </div>
  );
}

function ChatBox ({ addMessage, messages, sessionId }) {

  const [inputText, setInputText] = useState("Hi...");

  function keyPressed(event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  }

  function sendMessage(){
    let message = inputText;
    addMessage({text: message, sender: "user"});
    setInputText("")
    fetch('/message', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        "sessionId": sessionId,
        "message": message
      })
    })
    .then(response => response.json())
    .then(response => {
      addMessage({text: response.reply, sender: "bot"});
    })
  
  }

  return (
    <Card className="chat-box">

      { messages.length===0 &&
        <h1 className="title mx-auto">Welcome</h1>
      }


      { messages.length===0 &&
        <h2 className="title mx-auto"> <span style={{fontSize: "200%"}}>😃</span>👇 </h2>
      }


      <div className="msg-history">
        {
          messages.map(message => (
            <div className = {message.sender === "bot" ? "bot-msg" : "" } >
              <MessageBox message={message}/> 
            </div>
          ))
        }
      </div>

      <InputBox 
        inputText = {inputText} 
        setInputText = {setInputText} 
        keyPressed = {keyPressed} 
        sendMessage = {sendMessage} 
      />


    </Card>
  );
}

export default ChatBox;