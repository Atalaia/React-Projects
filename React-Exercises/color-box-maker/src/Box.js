import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
    render() {
        return (
            <div>
                <div style={{
                    width: `${this.props.width}em`,
                    height: `${this.props.height}em`,
                    backgroundColor: `${this.props.backgroundColor}`
                }} />
                <button onClick={this.props.removeColorBox}>Remove Box</button>
            </div>
        )
    }
}

export default Box;