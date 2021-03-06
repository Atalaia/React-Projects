import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import "./NewTodoForm.css";

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoItem: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }
    handleSubmit(evt) {
        evt.preventDefault();
        const newTodo = { ...this.state, id: uuidv4(), completed: false };
        this.props.addNewTodo(newTodo);
        this.setState({
            todoItem: ""
        });
    }

    render() {
        return (
            <form className="NewTodoForm" onSubmit={this.handleSubmit}>
                <label html="todo">New Todo</label>
                <input
                    type="text"
                    id="todo"
                    placeholder="New task"
                    name="todoItem"
                    onChange={this.handleChange}
                    value={this.state.todoItem}
                />
                <button>ADD TODO</button>
            </form>
        );
    }
}

export default NewTodoForm;