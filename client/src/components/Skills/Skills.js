import React from "react";

import { 
  Container, 
  Row, 
  Col,
  Button 
} from "reactstrap";

import "./Skills.scss"

function Skills() {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#0b1011" fill-opacity="1" d="M0,128L80,154.7C160,181,320,235,480,224C640,213,800,139,960,138.7C1120,139,1280,213,1360,250.7L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
        </path>
      </svg>
      <div className="section section-dark section-nucleo-icons skills">
        <Container style={{marginBottom: "30px"}} >
          <Row>
            <Col lg="6" md="12">
              <h1 className="skills-title"><span>S</span>kills</h1>
            </Col>
            <Col lg="6" md="12">
              <div className="icons-container skills-icons">
                <i className="nc-icon nc-time-alarm" />
                <i className="nc-icon nc-atom" />
                <i className="nc-icon nc-camera-compact" />
                <i className="nc-icon nc-watch-time" />
                <i className="nc-icon nc-key-25" />
                <i className="nc-icon nc-diamond" />
                <i className="nc-icon nc-user-run" />
                <i className="nc-icon nc-layout-11" />
                <i className="nc-icon nc-badge" />
                <i className="nc-icon nc-bulb-63" />
                <i className="nc-icon nc-favourite-28" />
                <i className="nc-icon nc-planet" />
                <i className="nc-icon nc-tie-bow" />
                <i className="nc-icon nc-zoom-split" />
                <i className="nc-icon nc-cloud-download-93" />
              </div>
            </Col>
          </Row>
        </Container>

        <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="8">
            <h2 className="title">Let's talk product</h2>
            <h5 className="description">
              <em>Simple Modular Scalable Optimized Thoughtful</em>
            </h5>
            <br />
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col md="3">
            <div className="info">
              <div className="icon icon-info">
                <i className="nc-icon nc-bulb-63" />
              </div>
              <div className="description">
                <h4 className="info-title" style={{marginBottom: "5px"}}>Problem Solving</h4>
                <p>
                  Efficient at problem solving using appropriate data structures and algorithms
                </p>
                <Button className="btn-link" color="info" href="https://www.codechef.com/users/hmahajan" target="_blank">Codechef</Button>
                <br/>
                <Button className="btn-link" color="info" style={{cursor: "default", marginBottom: "15px"}}>
                  _______
                </Button>
              </div>
            </div>
          </Col>
          <Col md="3">
            <div className="info">
              <div className="icon icon-info">
                <i className="nc-icon nc-atom" />
              </div>
              <div className="description">
                <h4 className="info-title" style={{marginBottom: "5px"}}>Languages</h4>
                <p>
                  <strong>C++</strong> (Proficient) <br/>
                  <strong>Javascript</strong> <br/>
                  <strong>Python</strong> <br/>
                  <strong>C</strong> <br/>
                  <strong>Java</strong> (Novice) <br/>
                  <strong>R</strong> (Novice) <br/>
                </p>
                <Button className="btn-link" color="info" style={{cursor: "default", marginBottom: "15px"}}>
                  _______
                </Button>
              </div>
            </div>
          </Col>
          <Col md="3">
            <div className="info">
              <div className="icon icon-info">
                <i className="nc-icon nc-world-2" />
              </div>
              <div className="description">
                <h4 className="info-title" style={{marginBottom: "5px"}}>Web Development</h4>
                <p className="description">
                  <strong>HTML</strong> <br/>
                  <strong>CSS</strong> <br/>
                  <strong>Javascript</strong> <br/>
                  <strong>React + Redux</strong> <br/>
                  <strong>Node.js</strong> <br/>
                  <strong>Express</strong> <br/>
                  <strong>Flask</strong> <br/>
                  <strong>PostgreSQL</strong> <br/>
                  <strong>Firebase</strong> <br/>
                  <strong>Redis</strong> <br/>
                  <strong>Docker</strong> <br/>
                  <strong>Heroku</strong> <br/>
                </p>
                <Button className="btn-link" color="info" style={{cursor: "default", marginBottom: "15px"}}>
                  _______
                </Button>
              </div>
            </div>
          </Col>
          <Col md="3">
            <div className="info">
              <div className="icon icon-info">
                <i className="nc-icon nc-chart-bar-32" />
              </div>
              <div className="description">
                <h4 className="info-title" style={{marginBottom: "5px"}}>Machine Learning</h4>
                <p>
                  Working knowledge of various machine learning algorithms
                </p>
                <Button className="btn-link" color="info" style={{cursor: "default", marginBottom: "15px"}}>
                  _______
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>


      </div>
    </>
  );
}

export default Skills;
