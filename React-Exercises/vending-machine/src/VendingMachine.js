import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './VendingMachine.css';

class VendingMachine extends Component {
    render() {
        return (
            <div className="VendingMachine">
                <div className="VendingMachine-text">
                    <p>Hello I am a vending machine. What would you like to eat?</p>
                </div>
                <div className="VendingMachine-image">
                    <img src="https://www.clipartkey.com/mpngs/m/94-946079_free-cartoon-vending-machine.png" alt="vending-machine" />
                </div>
                <div className="VendingMachine-links">
                    <Link className="VendingMachine-link" exact activeClassName="active-link" to="/chips">Chips</Link>
                    <Link className="VendingMachine-link" exact activeClassName="active-link" to="/soda">Soda</Link>
                    <Link className="VendingMachine-link" exact activeClassName="active-link" to="/chocolate-bar">Chocolate Bar</Link>
                </div>
            </div>
        );
    }
}

export default VendingMachine;
