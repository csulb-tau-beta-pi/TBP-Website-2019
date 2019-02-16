import React, { Component } from "react";
import Routes from "./modules/navigation/Routes";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class="App">
        <Routes />
      </div>
    );
  }
}
export default App;
