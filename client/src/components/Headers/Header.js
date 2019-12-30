import React from "react";

import { Container } from "reactstrap";

import "./Header.scss"

function Header() {
  return (
    <div>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/antoine-barres.jpg") + ")"
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">Harshit Mahajan</h1>
              <div className="fog-low">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
              <div className="fog-low right">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
            </div>
            <div style={{display: "flex",justifyContent: "center"}}>
              <h2 className="presentation-subtitle text-center">
                Not your average software engineer!
              </h2>
              <img 
                alt=""
                className="img-circle img-no-padding img-responsive"
                src={require("assets/img/hmdev.jpg")}
                height="100"
                style={{position: "absolute", zIndex: "-1"}}
              />
            </div>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")"
          }}
        />
      </div>
    </div>
  );
}

export default Header;
