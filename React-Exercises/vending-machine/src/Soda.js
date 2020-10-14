import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Soda.css";

class Soda extends Component {
  render() {
    return (
      <div className="Soda">
        <div className="Soda-img">
          <img className="Soda-img-right" src="https://i.pinimg.com/originals/f2/0c/0e/f20c0e4fc927793a3621a1be7a936161.png" alt="soda"/>
        </div>
        <div className="Soda-text">
          <h1 className="Soda-title">OMG SUGAR!!</h1>
          <Link className="Soda-link" exact activeClassName="active-link" to="/">
            GO BACK
          </Link>
        </div>
        <div className="Soda-img">
          <img className="Soda-img-left" src="https://i.pinimg.com/originals/f2/0c/0e/f20c0e4fc927793a3621a1be7a936161.png" alt="soda"/>
        </div>
      </div>
    );
  }
}

export default Soda;