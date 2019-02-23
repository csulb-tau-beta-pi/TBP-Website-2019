import React, { Component } from "react";
import "./GlobalStyles.css";

class Footer extends Component {
  render() {
    return (
      <div>
        <div style={footerStyle}>
          <p>
            {"\u00a9 "}
            <span className="em1">CSULB</span> TBP
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;

const footerStyle = {
  backgroundColor: "rgba(0,0,0,0.9)",
  color: "white",
  height: "5rem"
};
