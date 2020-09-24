import React, { Component } from 'react';

class Todo extends Component {
    render () {
        return(
            <div>
                {this.props.todoItem}
                <button onClick={this.props.editTodoItem}>Edit</button>
                <button onClick={this.props.removeTodoItem}>Delete</button>
            </div>
        );
    }
}

export default Todo