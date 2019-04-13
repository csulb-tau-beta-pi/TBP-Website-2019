import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

import "./GlobalStyles.css";

class Footer extends Component {
  render() {
    return (
      <div style={footerStyle}>
        <img
          src={require("../../assets/images/icons/small-logo-chapter-yellow-white.png")}
          style={{ height: "4.2rem", paddingTop: 5 }}
          alt="CSULB Tau Beta Pi"
        />
        <br />
        <br />
        <a
          href="https://www.facebook.com/TBPCATheta/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" style={mediaButton} />
        </a>
        <a
          href="https://www.instagram.com/csulbtbp/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" style={mediaButton} />
        </a>
        <a
          href="https://github.com/csulb-tau-beta-pi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" style={mediaButton} />
        </a>
        <hr style={{ borderColor: "rgba(255,255,255,0.2)" }} />
        <div>
          <p>
            {"\u00a9 "}
            <span className="em1">CSULB</span> TBP
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;

const footerStyle = {
  backgroundColor: "rgba(0,0,0,0.9)",
  flex: 1,
  justifyContent: "center",
  color: "white",
  paddingTop: 20,
  paddingBottom: 5,
  position: "absolute",
  bottom: 0,
  width: "100%"
};

const mediaButton = {
  color: "#ffa000",
  margin: 8
};
