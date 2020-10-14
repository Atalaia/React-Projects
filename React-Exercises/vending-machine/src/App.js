import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import VendingMachine from "./VendingMachine";
import Chips from "./Chips";
import Soda from "./Soda";
import ChocolateBar from "./ChocolateBar";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={VendingMachine} />
          <Route exact path="/chips" component={Chips} />
          <Route exact path="/soda" component={Soda} />
          <Route exact path="/chocolate-bar" component={ChocolateBar} />
        </Switch>
      </div>
    );
  }
}

export default App;
