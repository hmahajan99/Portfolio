import React from "react";

import "./ChatButton.scss"

function ChatButton() {
  return (
    <div className="chat-button">
      <img 
      alt=""
      className="img-circle img-no-padding img-responsive"
      src={require("assets/img/hmdev.jpg")}
      />
      <i className="nc-icon nc-chat-33" />
    </div>
  );
}
  
  export default ChatButton;
  