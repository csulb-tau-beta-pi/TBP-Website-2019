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
          >
            <a
              href={props.faculty.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button style={{ transform: "scale(0.7)" }} color="warning">
                CSULB Staff Page
              </Button>
            </a>
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
  flexDirection: "row",
  maxHeight: "180px"
};

const cardBodyStyle = {
  display: "flex",
  flexDirection: "column",
  textAlign: "left"
};

const facultyName = {
  fontSize: "1.5rem",
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
  maxWidth: "180px",
  objectFit: "cover"
};
