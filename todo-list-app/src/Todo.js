import React, { Component } from 'react';
import "./Todo.css"

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            todoItem: this.props.todoItem
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleRemove() {
        this.props.removeTodoItem(this.props.id);
    }
    toggleForm() {
        this.setState({
            isEditing: !this.state.isEditing
        });
    }
    handleUpdate(evt) {
        evt.preventDefault();
        //take new task data and pass up to parent
        this.props.updateTodoItem(this.props.id, this.state.todoItem);
        this.toggleForm();
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }
    handleToggle(evt) {
        this.props.toggleTodo(this.props.id);
    }

    render() {
        let result;
        if (this.state.isEditing) {
            result = (
                <div className="Todo">
                    <form className="Todo-edit-form" onSubmit={this.handleUpdate} >
                        <input
                            type="text"
                            value={this.state.todoItem}
                            name="todoItem"
                            onChange={this.handleChange}
                        />
                        <button>Save</button>
                    </form>
                </div>
            );
        } else {
            result = (
                <div className="Todo">
                    <li
                        className={
                            this.props.completed ? "Todo-task completed" : "Todo-task"
                        }
                        onClick={this.handleToggle}
                    >
                        {this.props.todoItem}
                    </li>
                    <div className="Todo-buttons">
                        <button onClick={this.toggleForm}>
                            <i class="fas fa-pen" />
                        </button>
                        <button onClick={this.handleRemove}>
                            <i class="fas fa-trash" />
                        </button>
                    </div>
                </div>
            );
        }
        return result;
    }
}

export default Todo;