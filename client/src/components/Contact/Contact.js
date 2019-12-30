import React from "react";

import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

function Contact() {
  return (
    <div>
      <div className="section">
        <Container className="text-center">
          <Row className="justify-content-md-center sharing-area text-center">
            <Col className="text-center" lg="8" md="12">
              <h2 className="title">Do you like what you see?</h2>
              <h3>Consider contacting me!</h3>
            </Col>
            <Col className="text-center" lg="8" md="12">
              <Button
                className="linkedin-sharrre btn-round  ml-2"
                color="google-bg"
                href="https://github.com/hmahajan99"
                target="_blank"
                id="tooltip840791273"
              >
                <i className="fa fa-github" /> Github
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip840791273">
                <strong>Star!</strong>
              </UncontrolledTooltip>
              <Button
                className="facebook-sharrre btn-round ml-2"
                color="facebook-bg"
                href="https://www.linkedin.com/in/hmahajan99"
                target="_blank"
                id="tooltip68961360"
              >
                <i className="fa nc-icon nc-zoom-split" /> LinkedIn
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip68961360">
                <strong>Connect!</strong>
              </UncontrolledTooltip>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Contact;
