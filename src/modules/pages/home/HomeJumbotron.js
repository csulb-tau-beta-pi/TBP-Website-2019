import React from "react";
import { Jumbotron, Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const HomeJumbotron = props => {
  return (
    <div>
      <Jumbotron fluid className="home-inner" style={{ padding: 0, margin: 0 }}>
        <Container fluid style={{ padding: 0 }}>
          <div className="overlay">
            <div className="caption">
              <h1 className="nexa-bold">
                <span className="em1">CSULB</span> Tau Beta Pi
              </h1>
              <h4 className="nexa-light">The Engineering Honor Society</h4>
            </div>
            <div style={mediaGroup}>
              <a
                href="https://www.facebook.com/TBPCATheta/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  size="2x"
                  style={mediaButton}
                />
              </a>
              <a
                href="https://www.instagram.com/csulbtbp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="2x"
                  style={mediaButton}
                />
              </a>
              <a
                href="https://github.com/csulb-tau-beta-pi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  size="2x"
                  style={mediaButton}
                />
              </a>
            </div>
            <FontAwesomeIcon icon={faArrowDown} />
          </div>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default HomeJumbotron;

const mediaGroup = {
  flex: 1,
  width: "100%",
  maxWidth: "100%",
  zIndex: 1
};

const mediaButton = {
  color: "#ffffff",
  margin: 8
};
