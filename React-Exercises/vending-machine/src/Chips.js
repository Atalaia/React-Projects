import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Chips.css";

class Chips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eatenBags: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      eatenBags: this.state.eatenBags + 1
    })
  }
  render() {
    return (
      <div className="Chips">
        <div className="Chips-counter">
          <img src="https://fridg-front.s3.amazonaws.com/media/products/chips-sel-lays-150-g.png"/>
          <h1 className="Chips-counter-text">BAGS EATEN: {this.state.eatenBags}</h1>
          <button className="Chips-counter-btn" onClick={this.handleClick}>MORE CHIPS</button>
          <Link className="Chips-counter-link" exact activeClassName="active-link" to="/">
            GO BACK
          </Link>
        </div>
      </div>
    );
  }
}

export default Chips;