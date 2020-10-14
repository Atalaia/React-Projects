import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./ChocolateBar.css";

class ChocolateBar extends Component {
  render() {
    return (
      <div className="ChocolateBar">
        <div className="ChocolateBar-text">
          <h1>THIS IS NOT A CHOCOLATE BAR, THIS IS MAKE UP!</h1>
        </div>
        <div className="ChocolateBar-img">
          <img src="https://images-na.ssl-images-amazon.com/images/I/81N21V-xH4L._AC_SX466_.jpg" alt="chocolate bar" />
        </div>
        <div className="ChocolateBar-link">
          <Link className="ChocolateBar-link" exact activeClassName="active-link" to="/">
            GO BACK
          </Link>
        </div>
      </div>
    );
  }
}

export default ChocolateBar;