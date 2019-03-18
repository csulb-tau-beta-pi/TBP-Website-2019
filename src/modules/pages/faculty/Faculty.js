import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import FacultyCard from "./FacultyCard";
import FacultyList from "./FacultyList";
import Footer from "../../components/Footer";

const facultyList = FacultyList;

class Faculty extends Component {
  render() {
    let facultyCards = facultyList.map(facultyInfo => {
      return (
        <Col xl="6" className="mb-5" key={facultyInfo.name}>
          <FacultyCard faculty={facultyInfo} />
        </Col>
      );
    });
    return (
      <div className="page">
        <div className="section-white">
          <div className="w-80">
            <div className="col-12 narrow">
              <Container fluid>
                <hr />
                <h2>
                  <span className="em1">Faculty</span> Members
                </h2>
                <hr />
                <br />
                <Row>{facultyCards}</Row>
              </Container>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Faculty;
