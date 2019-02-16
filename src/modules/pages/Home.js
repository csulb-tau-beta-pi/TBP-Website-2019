import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Jumbotron } from "reactstrap";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="landing">
          <div className="home-wrap">
            <div className="home-inner">
              <div className="overlay" />
            </div>
          </div>
        </div>

        <div className="caption text-center">
          <h1>
            <span className="em1">CSULB</span> Tau Beta Pi
          </h1>
          <h3>The Engineering Honor Society</h3>
          <a className="btn btn-outline-light btn-lg" href="#about">
            Get Started
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
