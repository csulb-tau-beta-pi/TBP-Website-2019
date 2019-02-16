import React, { Component } from "react";
import { RouteComponentProps } from "react-router";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Alert } from "reactstrap";
import NavBar from "./NavBar";
import Home from "../pages/Home";
import About from "../pages/About";
import Officers from "../pages/Officers";
import Initiation from "../pages/Initiation";
import Contact from "../pages/Contact";

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/officers" component={Officers} />
          <Route path="/initiation" component={Initiation} />
          <Route path="/contact" component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;
