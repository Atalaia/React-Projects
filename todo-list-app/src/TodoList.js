import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todosList: []
        }
        this.createTodo = this.createTodo.bind(this);
    }
    createTodo(newTodo) {
        this.setState({
            todosList: [...this.state.todosList, newTodo]
        });
    }
    removeTodo(id) {
        this.setState({
            todosList: this.state.todosList.filter(todo => todo.id !== id)
        });
    }

    render() {
        const todos = this.state.todosList.map(todo => (
            <Todo
                key={todo.id}
                id={todo.id}
                todoItem={todo.todoItem}
                removeTodoItem={() => this.removeTodo(todo.id)}
            />
        ));

        return (
            <div>
                <h1>Todo List!</h1>
                <p>A Simple React Todo List App.</p>
                {todos}
                <NewTodoForm addNewTodo={this.createTodo} />
            </div>
        );
    }
}

export default TodoList;