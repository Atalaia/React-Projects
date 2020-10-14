import React, { Component } from 'react';
import { Route, Switch, NavLink } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Chips from "./Chips";
import Soda from "./Soda";
import ChocolateBar from "./ChocolateBar";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="App-navbar">
          <NavLink className="nav-link" exact activeClassName="active-link" to="/">Home</NavLink>
          <NavLink className="nav-link" exact activeClassName="active-link" to="/chips">Chips</NavLink>
          <NavLink className="nav-link" exact activeClassName="active-link" to="/soda">Soda</NavLink>
          <NavLink className="nav-link" exact activeClassName="active-link" to="/chocolate-bar">Chocolate Bar</NavLink>
        </nav>
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
