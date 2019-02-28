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
      <div>
        <div style={footerStyle}>
          <p>
            <img
              src={require("../../assets/images/icons/small-logo-chapter-yellow-white.png")}
              style={{ height: "4.2rem", paddingTop: 5 }}
              alt="CSULB Tau Beta Pi"
            />
            <br />
            <br />
            <a href="https://www.facebook.com/TBPCATheta/" target="_blank">
              <FontAwesomeIcon
                icon={faFacebook}
                size="2x"
                style={mediaButton}
              />
            </a>
            <a href="https://www.instagram.com/csulbtbp/" target="_blank">
              <FontAwesomeIcon
                icon={faInstagram}
                size="2x"
                style={mediaButton}
              />
            </a>
            <a href="https://github.com/csulb-tau-beta-pi" target="_blank">
              <FontAwesomeIcon icon={faGithub} size="2x" style={mediaButton} />
            </a>
            <hr style={{ borderColor: "rgba(255,255,255,0.2)" }} />
            <div style={{ paddingTop: 5 }}>
              {"\u00a9 "}
              <span className="em1">CSULB</span> TBP
            </div>
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
  height: "15.8rem"
};

const mediaButton = {
  color: "#ffa000",
  margin: 8
};
