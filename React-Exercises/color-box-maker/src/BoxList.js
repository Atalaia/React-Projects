import React, { Component } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colorBoxes: []
        }
        this.addNewBox = this.addNewBox.bind(this);
    }
    addNewBox(newColorBox) {
        this.setState(state => ({
            colorBoxes: [...state.colorBoxes, newColorBox]
        }));
    }
    removeColorBox(id) {
        this.setState({
            colorBoxes: this.state.colorBoxes.filter(colorBox => colorBox.id !== id)
        });
    }

    render() {
        const colorBoxes = this.state.colorBoxes.map(colorBox => (
            <Box
                key={colorBox.id}
                id={colorBox.id}
                width={colorBox.width}
                height={colorBox.height}
                backgroundColor={colorBox.backgroundColor}
                removeColorBox={() => this.removeColorBox(colorBox.id)}
            />
        ));
        return (
            <div>
                <h1>Color Box Maker</h1>
                <NewBoxForm addNewBox={this.addNewBox} />
                {colorBoxes}
            </div>
        );
    }
}

export default BoxList;