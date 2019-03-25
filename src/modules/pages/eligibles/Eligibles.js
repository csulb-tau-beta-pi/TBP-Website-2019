import React, { Component } from "react";
import { Container } from "reactstrap";
import Footer from "../../components/Footer";
import "../../../assets/fonts/FontStyles.css";
import "../../components/GlobalStyles.css";
import * as XLSX from "xlsx";
import excel from "xlsx";

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
                  List of <span className="em1">Eligibles</span>
                </h2>
                <hr />
                <br />
                <p>Will have it up before Spring Break</p>
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
