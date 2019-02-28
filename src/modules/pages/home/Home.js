import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import "../../../assets/fonts/FontStyles.css";
import "../../components/GlobalStyles.css";
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
          <h1 className="nexa-bold">
            <span className="em1">CSULB</span> Tau Beta Pi
          </h1>
          <h4 className="nexa-light">The Engineering Honor Society</h4>
          <Link to="/about">
            <div className="nexa-light btn btn-outline-light btn-lg">
              Get Started
            </div>
          </Link>
        </div>

        <div style={mediaGroup}>
          <a href="https://www.facebook.com/TBPCATheta/" target="_blank">
            <FontAwesomeIcon icon={faFacebook} size="2x" style={mediaButton} />
          </a>
          <a href="https://www.instagram.com/csulbtbp/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} size="2x" style={mediaButton} />
          </a>
          <a href="https://github.com/csulb-tau-beta-pi" target="_blank">
            <FontAwesomeIcon icon={faGithub} size="2x" style={mediaButton} />
          </a>
        </div>
      </div>
    );
  }
}

export default Home;

const mediaGroup = {
  flex: 1,
  width: "100%",
  maxWidth: "100%",
  position: "absolute",
  top: "90%",
  zIndex: 1
};

const mediaButton = {
  color: "#ffffff",
  margin: 8
};
