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
                <Col lg="6">
                  <Card body>
                    <CardBody>
                      <CardTitle>
                        <h4>Undergraduate Student Requirements</h4>
                      </CardTitle>
                      <hr />
                      <CardText>Test</CardText>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6">
                  <Card body>
                    <CardBody>
                      <CardTitle>
                        <h4>Graduate Student Requirements</h4>
                      </CardTitle>
                      <hr />
                      <CardText>
                        “Ammeter, Indicator, Wye Level Wye. Slide Rule, Dynamo,
                        Tau Beta Pi!”
                      </CardText>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

export default Initiation;
