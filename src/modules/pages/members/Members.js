import React, { Component } from "react";
import { Container, Button } from "reactstrap";
import Footer from "../../components/Footer";
import "../../../assets/fonts/FontStyles.css";
import "../../components/GlobalStyles.css";

class Members extends Component {
  render() {
    return (
      <div className="page">
        <div className="section-white">
          <div className="w-80">
            <div className="col-12 narrow">
              <Container fluid>
                <hr />
                <h2>
                  List of <span class="em1">Members</span>
                </h2>
                <hr />
                <br />
                <Button color="primary" style={{ transform: "scale(0.6)" }}>
                  <span style={{ fontSize: 20 }}>Small Button</span>
                </Button>{" "}
                <Button color="secondary" size="lg">
                  Large Button
                </Button>{" "}
              </Container>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Members;
