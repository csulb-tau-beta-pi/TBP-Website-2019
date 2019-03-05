import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  Button
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../../../assets/fonts/FontStyles.css";
import "../../components/GlobalStyles.css";

const FacultyCards = props => {
  return (
    <div style={container}>
      <Card style={cardStyle} className="h-100">
        <CardImg
          style={imageStyle}
          src={props.faculty.imgSource}
          alt="Faculty Image (not loaded)"
        />
        <CardBody style={cardBodyStyle}>
          <CardTitle style={facultyName} className="nexa-light">
            {props.faculty.name}
          </CardTitle>
          <CardSubtitle style={facultyDepartment} className="nexa-light">
            {props.faculty.department}
          </CardSubtitle>
          <CardText>
            <Button
              style={{ padding: 0 }}
              color="warning"
              size="sm"
              className="nexa-light"
            >
              CSULB Staff Page
            </Button>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default FacultyCards;

const container = {
  flex: 1,
  alignItems: "center",
  justifyCotent: "center"
};
const cardStyle = {
  marginTop: "1.5rem",
  boxShadow: "1px 2px 6px rgba(0,0,0,0.1)",
  flexDirection: "row"
};

const cardBodyStyle = {
  textAlign: "left"
};

const facultyName = {
  fontSize: "1.6rem"
};

const facultyDepartment = {
  fontSize: ".8rem",
  letterSpacing: "0.1rem",
  fontWeight: "bold"
};

const imageStyle = {
  maxHeight: "180px",
  maxWidth: "180px",
  objectFit: "cover",
  float: "left",
  zIndex: 10
};
