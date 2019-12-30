import React from "react";

import { Row, Container } from "reactstrap";

function Footer() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <div className="credits">
            <span className="copyright">
              <strong>
                © {new Date().getFullYear()}, made with{" "}
                <i className="fa fa-heart heart" /> by Harshit :)
              </strong>
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
