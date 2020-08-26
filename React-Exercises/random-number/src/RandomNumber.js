import React, { Component } from 'react';
import './RandomNumber.css';

class RandomNumber extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0
        };
        this.getRandomNumber = this.getRandomNumber.bind(this);
    }
    getRandomNumber() {
        let randonNumber = Math.floor(Math.random() * this.props.maxNum);
        this.setState({
            num: randonNumber
        })
    }
    render() {
        return (
            <div className="RandomNumber">
                <h1>Number is: {this.state.num}</h1>
                {this.state.num === 7
                    ? <h1>YOU WIN!!!</h1>
                    : <button onClick={this.getRandomNumber}>Random Number</button>
                }
            </div>
        );
    }
}

export default RandomNumber;