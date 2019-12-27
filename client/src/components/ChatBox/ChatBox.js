import React, { useState } from "react";

import {
  Card,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";

import "./ChatBox.scss";

function ChatBox ({ addMessage, messages }) {

  const [inputText, setInputText] = useState("Type something...");

  function keyPressed(event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  }

  function sendMessage(){
    let message = inputText;
    fetch('http://localhost:5000/message', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        "sessionId": "91c5b7dc-35f1-42ef-b83e-d925ba66996e",
        "message": message
      })
    })
    .then(response => response.json())
    .then(response => {
      addMessage({message, from: "user"});
      addMessage({message: response.reply, from: "bot"});
    })
  }

  return (
    <Card className="chat-box">

      { messages.length===0 &&
        <h1 className="title mx-auto">Welcome</h1>
      }


      { messages.length===0 &&
        // eslint-disable-next-line jsx-a11y/accessible-emoji
        <h2 className="title mx-auto"> <span style={{fontSize: "200%"}}>😃</span>👇 </h2>
      }


      <div className="msg-history" >
      MESAGES
      </div>

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


    </Card>
  );
}

export default ChatBox;