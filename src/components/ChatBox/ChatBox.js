import React from "react";

import {
  Button,
  Card,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup
} from "reactstrap";

import "./ChatBox.scss";

function ChatBox () {
  return (
    <Card className="chat-box card-register">
      <h3 className="title mx-auto">Welcome</h3>
      <div className="social-line text-center">
        <Button
          className="btn-neutral btn-just-icon mt-0"
          color="facebook"
          href="#pablo"
          onClick={e => e.preventDefault()}
        >
          <i className="fa fa-facebook-square" />
        </Button>
        <Button
          className="btn-neutral btn-just-icon mt-0 ml-1"
          color="google"
          href="#pablo"
          onClick={e => e.preventDefault()}
        >
          <i className="fa fa-google-plus" />
        </Button>
        <Button
          className="btn-neutral btn-just-icon mt-0 ml-1"
          color="twitter"
          href="#pablo"
          onClick={e => e.preventDefault()}
        >
          <i className="fa fa-twitter" />
        </Button>
      </div>
      <Form className="register-form">
        <label>Email</label>
        <InputGroup className="form-group-no-border">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="nc-icon nc-email-85" />
            </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="Email" type="email" />
        </InputGroup>
        <label>Password</label>
        <InputGroup className="form-group-no-border">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="nc-icon nc-key-25" />
            </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="Password" type="password" />
        </InputGroup>
        <Button
          block
          className="btn-round"
          color="danger"
          type="button"
        >
          Register
        </Button>
      </Form>
      <div className="forgot">
        <Button
          className="btn-link"
          color="danger"
          href="#pablo"
          onClick={e => e.preventDefault()}
        >
          Forgot password?
        </Button>
      </div>
    </Card>
  );
}

export default ChatBox;