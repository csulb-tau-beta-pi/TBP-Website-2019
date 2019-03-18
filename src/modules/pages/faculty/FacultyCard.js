import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  CardFooter,
  Button
} from "reactstrap";
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
          <CardText
            style={{
              textAlign: "center",
              padding: 0,
              display: "flex",
              justifyContent: "center"
            }}
          />
        </CardBody>
      </Card>
      <a
        href={props.faculty.link}
        target="_blank"
        rel="noopener noreferrer"
        className="link"
      >
        <CardFooter>
          <Button color="warning" style={buttonStyle}>
            CSULB Staff Page
          </Button>
        </CardFooter>
      </a>
    </div>
  );
};

export default FacultyCards;

const container = {
  flex: 1,
  alignItems: "center",
  justifyCotent: "center",
  boxShadow: "1px 2px 6px rgba(0,0,0,0.1)"
};
const cardStyle = {
  marginTop: "1.5rem",
  flexDirection: "row",
  maxHeight: "180px",
  borderRadius: 0
};

const cardBodyStyle = {
  display: "flex",
  flexDirection: "column",
  textAlign: "left"
};

const facultyName = {
  fontSize: "1.2rem",
  flex: 1
};

const facultyDepartment = {
  fontSize: ".8rem",
  color: "rgba(0,0,0,0.6)",
  letterSpacing: "0.1rem",
  fontWeight: "bold",
  flex: 1
};

const imageStyle = {
  maxHeight: "100%",
  maxWidth: "120px",
  objectFit: "cover",
  borderRadius: 0
};

const buttonStyle = {
  borderRadius: 30
};
