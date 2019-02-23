import React, { Component } from "react";
import {
  Container,
  Col,
  Row,
  Card,
  CardText,
  CardBody,
  CardTitle
} from "reactstrap";
import "../../../assets/fonts/FontStyles.css";
import "../../components/GlobalStyles.css";

class Initiation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="page">
        <div className="section-white">
          <div className="w-80">
            <Container fluid>
              <hr />
              <h2>
                How to <span class="em1">Join</span>
              </h2>
              <hr />
              <Row>
                <Col lg="6" className="mb-5">
                  <Card body className="h-100" style={cardStyle}>
                    <CardBody>
                      <CardTitle>
                        <h4>Undergraduate Student Requirements</h4>
                      </CardTitle>
                      <hr />
                      <CardText>
                        <ul style={{ textAlign: "left" }}>
                          <li style={{ fontWeight: "bold" }}>
                            Eligibility Requirement
                          </li>
                          <ul>
                            <li>Juniors: 3.4 GPA</li>
                            <li>Seniors: 3.2 GPA</li>
                          </ul>
                          <li style={{ fontWeight: "bold" }}>
                            Initiation Requirement
                          </li>
                          <ul>
                            <li>Initiation Fee: $125</li>
                          </ul>
                          <li style={{ fontWeight: "bold" }}>
                            Induction Requirement
                          </li>
                          <ul>
                            <li>
                              <li>Polish Individual Bent</li>
                              <li>Polish Big Bent</li>
                              <li>Attend an event/workshop</li>
                              <li>Volunteer for community service (1 hour)</li>
                              <li>Sign up and attend Officer Interview</li>
                              <li>Attend Tau Beta Pi Induction Ceremony</li>
                            </li>
                          </ul>
                        </ul>
                      </CardText>
                      <p>
                        See below for more information about each requirement.
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" className="mb-5">
                  <Card body className="h-100" style={cardStyle}>
                    <CardBody>
                      <CardTitle>
                        <h4>Graduate Student Requirements</h4>
                      </CardTitle>
                      <hr />
                      <CardText>
                        <ul style={{ textAlign: "left" }}>
                          <li>Fulfill Undergraduate Student Requirements</li>
                          <li>
                            Submit a letter from your graduate advisor verifying
                            that you have completed at least 50% of your degree
                            requirements
                          </li>
                          <li>
                            Obtain, complete and turn in the section eligibility
                            form to the Tau Beta Pi Office. Please make note of
                            the INSTRUCTIONS and REQUIRED DOCUMENTATION listed
                            on the right side of the form. Turn it into an
                            officer by the due date in the contact e-mail. If
                            you can’t make it to any office hours, please put it
                            in an envelope (labeled Grad Student Eligibility)
                            and slide it under the door.
                          </li>
                        </ul>
                      </CardText>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <div>
                <Card style={divSideDecoration} className="nexa-light">
                  A signature sheet will be given after paying the initiation
                  fee. Initiates are required to complete the signature sheet by
                  the day of the Induction Ceremony.
                </Card>
              </div>
            </Container>
          </div>
        </div>
        <div className="section-gray">
          <div className="w-80">
            <hr />
            <h3>Eligibility</h3>
            <hr />
          </div>
        </div>
        <div className="section-white">
          <div className="w-80">
            <hr />
            <h3>Initiation</h3>
            <hr />
          </div>
        </div>
      </div>
    );
  }
}

export default Initiation;

const divSideDecoration = {
  fontSize: "1.2rem",
  margin: "auto",
  width: "80%",
  padding: "1.5rem",
  borderWidth: 0,
  borderLeftWidth: 4,
  borderRightWidth: 4,
  borderColor: "#ffa000"
};

const cardStyle = {
  backgroundColor: "rgba(0,0,0,0.1)",
  boxShadow: "1px 1px 6px rgba(0,0,0,0.3)",
  borderWidth: 0
};
