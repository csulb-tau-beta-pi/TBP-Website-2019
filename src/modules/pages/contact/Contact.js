import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";
import Footer from "../../components/Footer";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="page">
        <div className="section-white">
          <div className="w-80">
            <div className="col-12 narrow text-center">
              <hr />
              <h2>
                <span className="em1">Contact</span> Us
              </h2>
              <hr />
              <Container>
                <Row>
                  <Col lg="6">
                    <img
                      alt="Office"
                      className="img-fluid"
                      src={require("../../../assets/images/office.jpg")}
                    />
                  </Col>
                  <Col lg="6" style={{ textAlign: "left" }}>
                    <h3>Office Location</h3>
                    <p>
                      TBP Office EN3-118A
                      <br />
                      California State University, Long Beach <br />
                      1250 N Bellflower Blvd, Long Beach, California
                      <br />
                    </p>
                    <p>
                      <b>
                        Check out the Officer Page for the officer's email and
                        their officer hours.
                      </b>
                    </p>
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

export default Contact;
