import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu
} from "reactstrap";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import "../../assets/fonts/FontStyles.css";

export default class NavBar extends React.Component {
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
        <Navbar style={navbar} fixed="top" light expand="md">
          <NavLink to="/">
            <img
              src={require("../../assets/images/icons/small-logo-chapter-yellow-white.png")}
              style={{ height: "3rem" }}
              alt="CSULB Tau Beta Pi"
            />
          </NavLink>
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
                  style={{ textDecoration: "none", outline: 0 }}
                  activeStyle={{ color: "#ffa000" }}
                >
                  <div style={{ margin: 8 }}>Home</div>
                </NavLink>
              </NavItem>
              <NavItem style={navItem}>
                <NavLink
                  to="/about"
                  className="link nexa-light"
                  style={{ textDecoration: "none", outline: 0 }}
                  activeStyle={{ color: "#ffa000" }}
                >
                  <div style={{ margin: 8 }}>About</div>
                </NavLink>
              </NavItem>
              <NavItem style={navItem}>
                <NavLink
                  to="/join"
                  className="link nexa-light"
                  style={{ textDecoration: "none", outline: 0 }}
                  activeStyle={{ color: "#ffa000" }}
                >
                  <div style={{ margin: 8 }}>Join</div>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar style={navItem}>
                <DropdownToggle nav>
                  <div className="link nexa-light">Members</div>
                </DropdownToggle>
                <DropdownMenu style={dropDownStyle}>
                  <div style={subNavItem}>
                    <NavLink
                      to="/officers"
                      className="link nexa-light"
                      style={{ textDecoration: "none", outline: 0 }}
                      activeStyle={{ color: "#ffa000" }}
                    >
                      Officers
                    </NavLink>
                  </div>
                  <div style={subNavItem}>
                    <NavLink
                      to="/faculty"
                      className="link nexa-light"
                      style={{ textDecoration: "none", outline: 0 }}
                      activeStyle={{ color: "#ffa000" }}
                    >
                      Faculty
                    </NavLink>
                  </div>
                  <div style={subNavItem}>
                    <NavLink
                      to="/eligibles"
                      className="link nexa-light"
                      style={{ textDecoration: "none", outline: 0 }}
                      activeStyle={{ color: "#ffa000" }}
                    >
                      Eligibles
                    </NavLink>
                  </div>
                  <div style={subNavItem}>
                    <NavLink
                      to="/members"
                      className="link nexa-light"
                      style={{ textDecoration: "none", outline: 0 }}
                      activeStyle={{ color: "#ffa000" }}
                    >
                      Members
                    </NavLink>
                  </div>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar style={navItem}>
                <DropdownToggle nav>
                  <div className="link nexa-light">Others</div>
                </DropdownToggle>
                <DropdownMenu style={dropDownStyle}>
                  <div style={subNavItem}>
                    <NavLink
                      to="/calender"
                      className="link nexa-light"
                      style={{ textDecoration: "none", outline: 0 }}
                      activeStyle={{ color: "#ffa000" }}
                    >
                      Calender
                    </NavLink>
                  </div>
                  <div style={subNavItem}>
                    <NavLink
                      to="/contact"
                      className="link nexa-light"
                      style={{ textDecoration: "none", outline: 0 }}
                      activeStyle={{ color: "#ffa000" }}
                    >
                      Contact
                    </NavLink>
                  </div>
                  <div style={subNavItem}>
                    <NavLink
                      to="/faq"
                      className="link nexa-light"
                      style={{ textDecoration: "none", outline: 0 }}
                      activeStyle={{ color: "#ffa000" }}
                    >
                      FAQ
                    </NavLink>
                  </div>
                </DropdownMenu>
              </UncontrolledDropdown>
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
  backgroundColor: "rgba(0, 0, 0, .9)",
  zIndex: 10
};

const navItem = {
  marginRight: "1rem",
  marginTop: "0.2rem",
  marginBottom: "0.2rem"
};

const subNavItem = {
  textAlign: "center",
  textTransform: "none",
  paddingTop: 5,
  paddingBottom: 5
};

const dropDownStyle = {
  backgroundColor: "rgba(50, 50, 50, .8)",
  borderWidth: 0,
  boxShadow: "0px 0px 3px rgba(0,0,0,1)"
};
