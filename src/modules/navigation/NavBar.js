import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import "../../assets/fonts/FontStyles.css";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar style={navbar} light expand="md">
          <NavbarBrand className="mr-auto">
            <NavLink to="/">
              <img
                src={require("../../assets/images/icons/small-logo-chapter-yellow-white.png")}
                style={{ height: "3rem" }}
              />
            </NavLink>
          </NavbarBrand>
          <NavbarToggler
            onClick={this.toggleNavbar}
            style={{ backgroundColor: "#ffa000", color: "white" }}
            className="mr-2"
          />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem style={navItem}>
                <NavLink
                  exact
                  to="/"
                  className="link nexa-light"
                  style={{ textDecoration: "none" }}
                  activeStyle={{ color: "#ffa000" }}
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem style={navItem}>
                <NavLink
                  to="/about"
                  className="link nexa-light"
                  style={{ textDecoration: "none" }}
                  activeStyle={{ color: "#ffa000" }}
                >
                  About
                </NavLink>
              </NavItem>
              <NavItem style={navItem}>
                <NavLink
                  to="/officers"
                  className="link nexa-light"
                  style={{ textDecoration: "none" }}
                  activeStyle={{ color: "#ffa000" }}
                >
                  Officers
                </NavLink>
              </NavItem>
              <NavItem style={navItem}>
                <NavLink
                  to="/initiation"
                  className="link nexa-light"
                  style={{ textDecoration: "none" }}
                  activeStyle={{ color: "#ffa000" }}
                >
                  Initiation
                </NavLink>
              </NavItem>
              <NavItem style={navItem}>
                <NavLink
                  to="/contact"
                  className="link nexa-light"
                  style={{ textDecoration: "none" }}
                  activeStyle={{ color: "#ffa000" }}
                >
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const navbar = {
  textTransform: "uppercase",
  fontWeight: 700,
  fontSize: "0.9rem",
  letterSpacing: "0.1rem",
  backgroundColor: "rgba(0, 0, 0, .9)"
};

const navItem = {
  paddingRight: "1rem",
  paddingTop: "0.2rem",
  paddingBottom: "0.2rem"
};
