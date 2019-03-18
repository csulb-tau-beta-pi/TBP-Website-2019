import React, { Component } from "react";
import {
  Container,
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import "../../../assets/fonts/FontStyles.css";
import "../../components/GlobalStyles.css";
import Footer from "../../components/Footer";

class Join extends Component {
  render() {
    return (
      <div className="page">
        <div className="section-white">
          <div className="w-80">
            <div className="col-12 narrow">
              <Container fluid>
                <hr />
                <h2>
                  How to <span className="em1">Join</span>
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
                        <ul style={{ textAlign: "left" }}>
                          <li style={{ fontWeight: "bold" }}>
                            Eligibility Requirement
                          </li>
                          <ul>
                            <li>Top 1/8th of your junior class</li>
                            <li>Top 1/5th of your senior class</li>
                          </ul>
                          <li style={{ fontWeight: "bold" }}>
                            Initiation Requirement
                          </li>
                          <ul>
                            <li>Initiation Fee: $125</li>
                            <li>Polish Individual Bent</li>
                            <li>Polish Big Bent</li>
                            <li>Attend an event/workshop</li>
                            <li>Volunteer for community service (1 hour)</li>
                            <li>Sign up and attend Officer Interview</li>
                            <li>Attend Tau Beta Pi Induction Ceremony</li>
                          </ul>
                        </ul>
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
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
                <div>
                  <p
                    style={{ fontSize: 20, width: "80%", margin: "auto" }}
                    className="nexa-light"
                  >
                    A signature sheet will be given after paying the initiation
                    fee. Initiates are required to complete the signature sheet
                    by the day of the Induction Ceremony.
                  </p>
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
              <div>
                <Row style={{ fontSize: 24 }}>
                  <Col className="text-center">
                    Top <span style={{ fontSize: 50 }}>1/8</span>
                    <br />
                    of junior class
                  </Col>
                  <div>
                    <div style={vertLine} />
                  </div>
                  <Col className="text-center">
                    Top <span style={{ fontSize: 50 }}>1/5</span>
                    <br />
                    of senior class
                  </Col>
                </Row>
                <br />
                <hr />
                <br />
                <p>
                  An invitation will be sent to your
                  <span style={{ fontWeight: "bold" }}>
                    {" "}
                    CSULB Student email{" "}
                  </span>
                  if you meet the eligibility requirements. If you think that
                  you meet the eligibility requirements but haven't received an
                  email invitation, please come to our orientation or office
                  hours with an unofficial copy of your transcript to confirm
                  your eligility.
                </p>
              </div>
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
              </p>
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
              <p>
                If you cannot pay the full cost upfront, contact one of our
                officers for alternate payment options.{" "}
                <span style={{ fontWeight: "bold" }}>
                  Do not delay your TBP Initiation.
                </span>{" "}
                The initiation fee is required before you can participate in the
                required tasks before induction.
              </p>
              <h4>Bent Polishing</h4>
              <p>
                Each candidate must polish a personal bent before being admitted
                into Tau Beta Pi.
                <br />
                <br />
                You will most likely spend the majority of the time polishing
                your bent during the initiation period. Here are some
                suggestions for polishing the bent:
                <br />
              </p>
              <ul>
                <li>
                  Use a metal file to smooth out the rough surfaces and remove
                  any extra material along the edges. An emery board (nail file)
                  can also be used and works satisfactorily. No machinery may be
                  used.
                </li>
                <li>
                  After filing, use sandpaper starting with medium (200 grit)
                  and progress towards 320, 400, and continue up until 2000 or
                  2500 grit sandpaper.
                </li>
                <li>
                  A mirror-like finish can be obtained by using a metal polish
                  (the best is Mothers Billet Metal Polish).
                </li>
              </ul>
              Polishing the bent can be frustrating and time consuming if not
              done properly. Candidates are encouraged to come to the Tau Beta
              Pi office or speak with any member for assistance or suggestions.
              This should be a memorable and fun experience.
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Join;

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

const vertLine = {
  borderLeft: "2px solid #ffa000",
  height: "100%",
  marginLeft: "-1px"
};

/*
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
*/
