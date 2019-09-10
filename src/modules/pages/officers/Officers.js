import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import OfficerCard from "./OfficerCard";
import OfficerList from "./data/OfficerList";
import Footer from "../../components/Footer";
import officerHourPDF from "../../../assets/docs/schedule-s2019.pdf";

const officerList = OfficerList;

class Officers extends Component {
  onOfficerHoursClick = () => {};
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
              <a
                href={officerHourPDF}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Button block outline color="secondary" style={buttonStyle}>
                  Officer Hours
                </Button>{" "}
              </a>
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

const buttonStyle = {
  borderRadius: 5
};
