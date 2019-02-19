import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Officers from "../pages/officers/Officers";
import Initiation from "../pages/initation/Initiation";
import Contact from "../pages/contact/Contact";

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
