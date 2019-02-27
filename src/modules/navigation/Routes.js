import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Officers from "../pages/officers/Officers";
import Join from "../pages/join/Join";
import Contact from "../pages/contact/Contact";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./Routes.css";
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
          <Route
            render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={300}
                  classNames="fade"
                >
                  <Switch location={location}>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/officers" component={Officers} />
                    <Route path="/join" component={Join} />
                    <Route path="/contact" component={Contact} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;
