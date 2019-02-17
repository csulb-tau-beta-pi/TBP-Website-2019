import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./About.css";
import "../../assets/fonts/FontStyles.css";
import "../components/GlobalStyles.css";

class About extends Component {
  render() {
    return (
      <div>
        <div id="about">
          <div class="col-12 narrow text-center">
            <hr />
            <h2>
              <span class="em1">About</span> Tau Beta Pi
            </h2>
            <hr />
            <p>
              Tau Beta Pi is the only international engineering honor society to
              recognize engineers of all disciplines. It is the original
              national engineering honor society, and the nation's second oldest
              honor society. Founded in 1885 at Leheigh University, Tau Beta Pi
              has expanded to include over 235 chapters and over 520,000
              members. Its purpose is to recognize exemplary students and alumni
              in engineering.
            </p>
            <p>
              Visit the National Website to learn more of Tau Beta Pi's revered
              history.
            </p>
            <a
              className="nexa-light btn btn-outline-dark btn-lg"
              href="https://www.tbp.org/home.cfm"
            >
              TBP National Website
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
