import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import "../../../assets/fonts/FontStyles.css";
import "../../components/GlobalStyles.css";
import "./Home.css";
import Footer from "../../components/Footer";
import HomeJumbotron from "./HomeJumbotron";

class Home extends Component {
  render() {
    return (
      <div>
        <HomeJumbotron />
        <div className="page">
          <div className="section-white">
            <div className="w-80">
              <Container fluid>
                <hr />
                <h2>
                  Our <span className="em1">Events</span>
                </h2>
                <hr />
                Carousel Goes Here
                <hr />
                <br />
              </Container>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
