import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import "./assets/css/bootstrap.min.css";
import "./assets/scss/paper-kit.scss";
import "./assets/demo/demo.css";

import MainPage from "./pages/MainPage.js";
import ChatContainer from "./components/ChatContainer/ChatContainer.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/home" render={props => <MainPage {...props} />} />
      <Redirect to="/home" />
    </Switch>
    <ChatContainer />
  </BrowserRouter>,
  document.getElementById("root")
);
