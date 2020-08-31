import React, { Component } from 'react';
import Box from './Box';
import './BoxesContainer.css';

class BoxesCointainer extends Component {
    static defaultProps = {
        numBoxes: 12,
        colors: [
            "aqua",
            "black",
            "blue",
            "green",
            "lime",
            "purple",
            "teal",
            "yellow",
            "silver",
            "pink"
        ]
    }
    render() {
        const boxes = Array.from({ length: this.props.numBoxes }).map(() => (
            <Box colors={this.props.colors} />
        ));
        return (
            <div className="BoxesContainer">{boxes}</div>
        );
    }
}

export default BoxesCointainer;