import React, { Component } from "react";

const BackupJumbo = props => {
  return (
    <div className="landing">
      <div className="home-wrap">
        <div className="home-inner">
          <div className="overlay">
            <div className="caption text-center">
              <h1 className="nexa-bold">
                <span className="em1">CSULB</span> Tau Beta Pi
              </h1>
              <h4 className="nexa-light">The Engineering Honor Society</h4>
              <FontAwesomeIcon icon={"chevron-down"} />
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
          </div>
        </div>
      </div>
    </div>
  );
};
