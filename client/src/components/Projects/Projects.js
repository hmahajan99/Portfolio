import React, { useState } from "react";

import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";

import "./Projects.scss";

function Projects() {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <div>
      <div className="section section-dark projects">
        <h1 className="projects-title"><span>P</span>rojects</h1>
        <div className="projects-list">
        <Container>
          <Row>
            <Col md="4">
              <div className="info">
                <div className="icon icon-info">
                  <i className="nc-icon nc-single-02" />
                </div>
                <div className="description">
                  <h4 className="info-title" style={{marginBottom: "5px"}}>Mastermind v2</h4>
                  <p>
                    Second iteration of Mastermind, a web application for analyzing images built using 
                    <strong> React</strong>, 
                    <strong> Express</strong>,
                    <strong> PostgreSQL</strong>,
                    <strong> Redis</strong> and
                    <strong> Docker</strong>
                  </p>
                  <Button className="btn-link" color="info" href="https://github.com/hmahajan99/Mastermind-v2-Backend" target="_blank">Github</Button>
                  <Button className="btn-link" color="info" href="https://mastermind2.herokuapp.com/" target="_blank">Website</Button>
                  <br/>
                  <Button className="btn-link" color="info" style={{cursor: "default", marginBottom: "40px"}}>
                    _______
                  </Button>
                </div>
              </div>
            </Col>
            <Col md="4">
              <div className="info">
                <div className="icon icon-info">
                  <i className="nc-icon nc-money-coins" />
                </div>
                <div className="description">
                  <h4 className="info-title" style={{marginBottom: "5px"}}>7shop</h4>
                  <p>
                    E-commerce progressive web app made with 
                    <strong> React</strong>, 
                    <strong> Redux</strong>,
                    <strong> Express</strong>,
                    <strong> Firebase</strong> and
                    <strong> Stripe API</strong>
                  </p>
                  <Button className="btn-link" color="info" href="https://github.com/hmahajan99/7shop" target="_blank">Github</Button>
                  <Button className="btn-link" color="info" href="https://hm7shop.herokuapp.com/" target="_blank">Website</Button>
                  <br/>
                  <Button className="btn-link" color="info" style={{cursor: "default", marginBottom: "40px"}}>
                    _______
                  </Button>
                </div>
              </div>
            </Col>
            <Col md="4">
              <div className="info">
                <div className="icon icon-info">
                  <i className="nc-icon nc-single-copy-04" />
                </div>
                <div className="description">
                  <h4 className="info-title" style={{marginBottom: "5px"}}>Text Classification</h4>
                  <p>
                    Implemented   
                    <strong> Multinomial Naive Bayes Classifier </strong>
                    from scratch in <strong>Python</strong> to predict the news category of news articles
                  </p>
                  <Button className="btn-link" color="info" href="https://github.com/hmahajan99/Text-Classification" target="_blank">Github</Button>
                  <br/>
                  <Button className="btn-link" color="info" style={{cursor: "default", marginBottom: "40px"}}>
                    _______
                  </Button>
                </div>
              </div>
            </Col>
          </Row>

          {
            !seeMore ? (
              <Button 
                className="btn-link" color="info" 
                style={
                  { cursor: "pointer", 
                    marginBottom: "40px",
                    fontSize: "20px"
                }}
                onClick = {()=>setSeeMore(true)}
              >
              SEE MORE &#9660;
              </Button>
            ) : (
              <Row>
                <Col md="3">
                  <div className="info">
                    <div className="icon icon-info">
                      <i className="nc-icon nc-bus-front-12" />
                    </div>
                    <div className="description">
                      <h4 className="info-title" style={{marginBottom: "5px"}}>SIH Safe Driving</h4>
                      <p>
                        This was my team's product for <strong>Smart India Hackathon,2019</strong>. 
                        We built a ML model and an alternative <strong>mathematical model </strong>for avoiding collisions.
                        Used an <strong>Android app</strong> to make predictions by sending a request to the <strong>deployed ML model</strong>.
                      </p>
                      <Button className="btn-link" color="info" href="https://github.com/hmahajan99/SIH-Safe-Driving" target="_blank">Github</Button>
                      <br/>
                      <Button className="btn-link" color="info" style={{cursor: "default", marginBottom: "40px"}}>
                        _______
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col md="3">
                  <div className="info">
                    <div className="icon icon-info">
                      <i className="nc-icon nc-vector" />
                    </div>
                    <div className="description">
                      <h4 className="info-title" style={{marginBottom: "5px"}}>Decision Tree</h4>
                      <p>
                        Implemented Decision Tree Classifier from scratch in <strong>Python</strong>.
                        Added a feature to export the tree built using the training data into a <strong>PDF</strong>.
                      </p>
                      <Button className="btn-link" color="info" href="https://github.com/hmahajan99/Decision-Tree-Implementation" target="_blank">Github</Button>
                      <br/>
                      <Button className="btn-link" color="info" style={{cursor: "default", marginBottom: "40px"}}>
                        _______
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col md="3">
                  <div className="info">
                    <div className="icon icon-info">
                      <i className="nc-icon nc-chat-33" />
                    </div>
                    <div className="description">
                      <h4 className="info-title" style={{marginBottom: "5px"}}>Portfolio Site</h4>
                      <p>
                        My portfolio site built with <strong>React</strong> and <strong>Express</strong>. Comes with a <strong>chatbot</strong> of ME, made using <strong>IBM Watson</strong>.
                      </p>
                      <Button className="btn-link" color="info" href="https://github.com/hmahajan99/Portfolio" target="_blank">Github</Button>
                      <Button className="btn-link" color="info" href="https://hmahajan.herokuapp.com/" target="_blank">Website</Button>
                      <br/>
                      <Button className="btn-link" color="info" style={{cursor: "default", marginBottom: "40px"}}>
                        _______
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col md="3">
                  <div className="info">
                    <div className="icon icon-info">
                      <i className="nc-icon nc-ruler-pencil" />
                    </div>
                    <div className="description">
                      <h4 className="info-title" style={{marginBottom: "5px"}}>Blog</h4>
                      <p>
                        A blogging website using <strong>GatsbyJS</strong> and <strong>GraphQL</strong>
                      </p>
                      <Button className="btn-link" color="info" href="https://github.com/hmahajan99/Blog" target="_blank">Github</Button>
                      <Button className="btn-link" color="info" href="https://eloquent-dubinsky-5f6580.netlify.com" target="_blank">Website</Button>
                      <br/>
                      <Button className="btn-link" color="info" style={{cursor: "default", marginBottom: "40px"}}>
                        _______
                      </Button>
                    </div>
                  </div>
                </Col>
    
              </Row>
            )

          }
          
        </Container>


        </div>

      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#0b1011" fill-opacity="1" d="M0,192L80,165.3C160,139,320,85,480,106.7C640,128,800,224,960,218.7C1120,213,1280,107,1360,53.3L1440,0L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z">
        </path>
      </svg>
    </div>

  );
}

export default Projects;
