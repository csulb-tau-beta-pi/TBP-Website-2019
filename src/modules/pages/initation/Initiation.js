import React, { Component } from "react";
import {
  Container,
  Col,
  Row,
  Card,
  CardText,
  CardBody,
  CardTitle,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import "../../../assets/fonts/FontStyles.css";
import "../../components/GlobalStyles.css";

class Initiation extends Component {
  render() {
    return (
      <div className="page">
        <div className="section-white">
          <div className="w-80">
            <div className="col-12 narrow">
              <Container fluid>
                <hr />
                <h2>
                  How to <span class="em1">Join</span>
                </h2>
                <hr />
                <br />
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
                              <li>Student at CSULB</li>
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
                                <li>
                                  Volunteer for community service (1 hour)
                                </li>
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
                              Submit a letter from your graduate advisor
                              verifying that you have completed at least 50% of
                              your degree requirements
                            </li>
                            <li>
                              Obtain, complete and turn in the section
                              eligibility form to the Tau Beta Pi Office. Please
                              make note of the INSTRUCTIONS and REQUIRED
                              DOCUMENTATION listed on the right side of the
                              form. Turn it into an officer by the due date in
                              the contact e-mail. If you can’t make it to any
                              office hours, please put it in an envelope
                              (labeled Grad Student Eligibility) and slide it
                              under the door.
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
                    fee. Initiates are required to complete the signature sheet
                    by the day of the Induction Ceremony.
                  </Card>
                </div>
              </Container>
            </div>
          </div>
        </div>
        <div className="section-gray">
          <div className="w-80">
            <div className="col-12 narrow text-left">
              <hr />
              <h3>Eligibility</h3>
              <hr />
              <br />
              <p>
                The original eligibility requirements is:
                <ul>
                  <li>Top 1/8th of your junior class</li>
                  <li>Top 1/5th of your senior class</li>
                </ul>
                <br />
                These fractions are approximated to 3.4 GPA for juniors and 3.2
                for seniors. TBP Theta Chapter will look at the GPA requirement
                to determine your eligibility.
                <br /> <br />
                An invitation will be sent to your
                <span style={{ fontWeight: "bold" }}> CSULB Student</span> email
                if you meet the eligibility requirements. If you think that you
                meet the eligibility requirements but haven't received an email
                invitation, please come to our orientation or office hours with
                an unofficial copy of your transcript to confirm your eligility.
              </p>
            </div>
          </div>
        </div>
        <div className="section-white">
          <div className="w-80">
            <div className="col-12 narrow text-left">
              <hr />
              <h3>Initiation</h3>
              <hr />
              <br />
              <p>
                After meeting the eligibility requirements, you are qualified to
                become an <i>initiate</i>. As an initiate, you have to do a set
                of tasks before you become inducted into Tau Beta Pi.
                <br />
                <br />
                The cost of becoming an initiate is $125. Cash & check are
                acceptable. The following is the breakdown of the initiation
                fee:
                <br />
                <br />
                <ListGroup style={initiationList}>
                  <ListGroupItem color="warning">
                    Local chapter operations
                    <span style={initiationListItem}>$35.00</span>
                  </ListGroupItem>
                  <ListGroupItem color="warning">
                    National Convention Assessment
                    <span style={initiationListItem}>$12.00</span>
                  </ListGroupItem>
                  <ListGroupItem color="warning">
                    National Convention Expenses
                    <span style={initiationListItem}>$17.40</span>
                  </ListGroupItem>
                  <ListGroupItem color="warning">
                    Brass Bent
                    <span style={initiationListItem}>$6.50</span>
                  </ListGroupItem>
                  <ListGroupItem color="warning">
                    Four year subscription to the THE BENT
                    <span style={initiationListItem}>$6.50</span>
                  </ListGroupItem>
                  <ListGroupItem color="warning">
                    New Initiates Dinner
                    <span style={initiationListItem}>$19.00</span>
                  </ListGroupItem>
                  <ListGroupItem color="warning">
                    Membership Certificate
                    <span style={initiationListItem}>$2.50</span>
                  </ListGroupItem>
                  <ListGroupItem color="warning">
                    Current constitution and information booklet
                    <span style={initiationListItem}>$0.75</span>
                  </ListGroupItem>
                  <ListGroupItem color="warning">
                    Subscription to the Council Bulletin
                    <span style={initiationListItem}>$0.45</span>
                  </ListGroupItem>
                </ListGroup>
                <br />
                <br />
                If you cannot pay the full cost upfront, talk to one of our
                officers for alternate payment options.{" "}
                <span style={{ fontWeight: "bold" }}>
                  Do not delay your TBP Initiation.
                </span>{" "}
                The initiation fee is required before you can participate in the
                required tasks before induction.
              </p>
            </div>
          </div>
        </div>
        <div className="section-gray">
          <div className="w-80">
            <div className="col-12 narrow text-left">
              <hr />
              <h3>Induction</h3>
              <hr />
              <br />
            </div>
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

const initiationList = {
  maxWidth: "30rem",
  margin: "auto",
  fontSize: "14px"
};

const initiationListItem = {
  float: "right"
};
