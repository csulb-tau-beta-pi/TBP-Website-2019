import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import OfficerCard from "./OfficerCard";
import OfficerList from "./OfficerList";

const officerList = OfficerList;

class Officers extends Component {
  render() {
    let officerCards = officerList.map(officerInfo => {
      return (
        <Col lg="4" sm="6" className="mb-5">
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
                Meet our <span class="em1">Officers</span>
              </h2>
              <hr />
              <Row>{officerCards}</Row>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

export default Officers;
