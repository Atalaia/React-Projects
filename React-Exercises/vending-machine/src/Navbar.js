import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <NavLink className="nav-link" exact activeClassName="Navbar-active" to="/">Home</NavLink>
                <NavLink className="nav-link" exact activeClassName="Navbar-active" to="/chips">Chips</NavLink>
                <NavLink className="nav-link" exact activeClassName="Navbar-active" to="/soda">Soda</NavLink>
                <NavLink className="nav-link" exact activeClassName="Navbar-active" to="/chocolate-bar">Chocolate Bar</NavLink>
            </div>
        );
    }
}

export default Navbar;
