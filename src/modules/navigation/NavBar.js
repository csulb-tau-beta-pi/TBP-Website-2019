import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top">
          <Link to="/" style={linkStyle}>
            <NavbarBrand>
              <img
                src={require("../../assets/images/icons/small-logo-chapter-yellow-white.png")}
                style={logoStyle}
              />
            </NavbarBrand>
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <Link to="/" style={linkStyle}>
                <li className="nav-item">
                  <a className="nav-link">Home</a>
                </li>
              </Link>
              <Link to="/about" style={linkStyle}>
                <li className="nav-item">
                  <a className="nav-link">About</a>
                </li>
              </Link>
              <Link to="/officers" style={linkStyle}>
                <li className="nav-item">
                  <a className="nav-link">Officers</a>
                </li>
              </Link>
              <Link to="/initiation" style={linkStyle}>
                <li className="nav-item">
                  <a className="nav-link">Initiation</a>
                </li>
              </Link>
              <Link to="/contact" style={linkStyle}>
                <li className="nav-item">
                  <a className="nav-link">Contact</a>
                </li>
              </Link>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;

const logoStyle = {
  height: "3rem"
};

const linkStyle = {
  outline: "none",
  textDecoration: "none"
};
