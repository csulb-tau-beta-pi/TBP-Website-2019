import React, { Component } from "react";
import {
  ListGroup,
  ListGroupItem,
  Card,
  CardText,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";
import Footer from "../../components/Footer";
import "../../../assets/fonts/FontStyles.css";
import "../../components/GlobalStyles.css";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="page">
        <div className="section-white">
          <div className="w-80">
            <div class="col-12 narrow text-center">
              <hr />
              <h2>
                <span class="em1">About</span> Tau Beta Pi
              </h2>
              <hr />
              <p>
                Tau Beta Pi is the only international engineering honor society
                to recognize engineers of all disciplines. It is the original
                national engineering honor society, and the nation's second
                oldest honor society. Founded in 1885 at Leheigh University, Tau
                Beta Pi has expanded to include over 235 chapters and over
                520,000 members. Its purpose is to recognize exemplary students
                and alumni in engineering.
              </p>
              <p>
                Visit the National Website to learn more of Tau Beta Pi's
                revered history.
              </p>
              <a
                className="nexa-light btn btn-outline-dark btn-lg"
                href="https://www.tbp.org/home.cfm"
              >
                TBP National Website
              </a>
            </div>
          </div>
        </div>

        <div className="section-gray">
          <div className="w-80">
            <div className="col-12 narrow text-left">
              <hr />
              <h3>Code of Ethics of Engineers</h3>
              <hr />
              <h4>The Fundamental Principles</h4>
              <p>
                Engineers uphold and advance the integrity, honor, and dignity
                of the engineering profession by:
                <br />
                <br />
                Using their knowledge and skill for the enhancement of human
                welfare; being honest and impartial, and serving with fidelity
                the public, their employers and clients; striving to increase
                the competence and prestige of the engineering profession; and
                supporting the professional and technical societies of their
                disciplines.
              </p>
              <h4>The Fundamental Canons</h4>
              <p>
                <ListGroup style={{ textAlign: "left" }}>
                  <ListGroupItem>
                    1 | Engineers shall hold paramount the safety, health, and
                    welfare of the public in the performance of their
                    professional duties.
                  </ListGroupItem>
                  <ListGroupItem>
                    2 | Engineers shall perform services only in the areas of
                    their competence.
                  </ListGroupItem>
                  <ListGroupItem>
                    3 | Engineers shall issue public statements only in an
                    objective and truthful manner.
                  </ListGroupItem>
                  <ListGroupItem>
                    4 | Engineers shall act in professional matters for each
                    employer or client as faithful agents or trustees, and shall
                    avoid conflicts of interest.
                  </ListGroupItem>
                  <ListGroupItem>
                    5 | Engineers shall build their professional reputation on
                    the merit of their services and shall not compete unfairly
                    with others.
                  </ListGroupItem>
                  <ListGroupItem>
                    6 | Engineers shall act in such a manner as to uphold and
                    enhance the honor, integrity, and dignity of the profession.
                  </ListGroupItem>
                  <ListGroupItem>
                    7 | Engineers shall continue their professional development
                    through- out their careers and shall provide opportunities
                    for the professional development of those engineers under
                    their supervision.
                  </ListGroupItem>
                </ListGroup>
              </p>
            </div>
          </div>
        </div>
        <div className="section-white">
          <div className="w-80">
            <div className="col-12 narrow text-left">
              <hr />
              <h3>Chants & Yells</h3>
              <hr />
              <Container fluid>
                <Row>
                  <Col lg="4">
                    <Card body className="h-100">
                      <CardBody>
                        <CardTitle>
                          <h4>Preamble</h4>
                        </CardTitle>
                        <hr />
                        <CardText>
                          “The Tau Beta Pi Association was founded at Lehigh
                          University in 1885 by Edward Higginson Williams, Jr.,
                          to mark in a fitting manner those who have conferred
                          honor upon their Alma Mater by distinguished
                          scholarship and exemplary character as students in
                          engineering, or by their attainment as alumni in the
                          field of engineering, and to foster a spirit of
                          liberal culture in engineering colleges.”
                        </CardText>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="4">
                    <Card body className="h-100">
                      <CardBody>
                        <CardTitle>
                          <h4>Traditional Yell</h4>
                        </CardTitle>
                        <hr />
                        <CardText>
                          “Ammeter, Indicator, Wye Level Wye. Slide Rule,
                          Dynamo, Tau Beta Pi!”
                        </CardText>
                        <p style={{ fontSize: ".6rem", textAlign: "right" }}>
                          Adopted in 1908 <br />
                          Written by R.C. Matthews, IL A '02
                        </p>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="4">
                    <Card body className="h-100">
                      <CardBody>
                        <CardTitle>
                          <h4>Modern Yell</h4>
                        </CardTitle>
                        <hr />
                        <CardText>
                          “Calculate, Innovate, Try Try Try. Integrity, Honesty,
                          Tau Beta Pi!”
                        </CardText>
                        <p style={{ fontSize: ".6rem", textAlign: "right" }}>
                          Adopted in 1978 <br />
                          Written by H.F. Klos Jr., PA Z '78
                        </p>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
