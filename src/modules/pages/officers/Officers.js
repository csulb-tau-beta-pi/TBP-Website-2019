import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import OfficerCard from "./OfficerCard";
import OfficerList from "./OfficerList";
import Footer from "../../components/Footer";

const officerList = OfficerList;

class Officers extends Component {
  render() {
    let officerCards = officerList.map(officerInfo => {
      return (
        <Col lg="4" sm="6" className="mb-5" key={officerInfo.name}>
          <OfficerCard officer={officerInfo} />
        </Col>
      );
    });
    return (
      <div className="page">
        <div className="section-white">
          <div className="w-80">
            <Container fluid>
              <hr />
              <h2>
                Meet our <span className="em1">Officers</span>
              </h2>
              <hr />
              <br />
              <Row>{officerCards}</Row>
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Officers;
