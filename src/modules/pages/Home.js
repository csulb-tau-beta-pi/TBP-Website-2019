import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import "../../assets/fonts/FontStyles.css";
import "../components/GlobalStyles.css";

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
          <h1 className="nexa-bold">
            <span className="em1">CSULB</span> Tau Beta Pi
          </h1>
          <h3 className="nexa-light">The Engineering Honor Society</h3>
          <Link to="/about">
            <div className="nexa-light btn btn-outline-light btn-lg">
              Get Started
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
