import React, { Component } from "react";
import { Container } from "reactstrap";
import Footer from "../../components/Footer";
import "../../../assets/fonts/FontStyles.css";
import "../../components/GlobalStyles.css";

class Eligibles extends Component {
  render() {
    return (
      <div className="page">
        <div className="section-white">
          <div className="w-80">
            <div className="col-12 narrow">
              <Container fluid>
                <hr />
                <h2>
                  List of <span class="em1">Eligibles</span>
                </h2>
                <hr />
                <br />
                <h3>Juniors</h3>
                <h3>Seniors</h3>
              </Container>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Eligibles;
