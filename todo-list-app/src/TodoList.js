import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import "./TodoList.css";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todosList: []
        }
        this.createTodo = this.createTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
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
    updateTodo(id, updatedTodo) {
        const updatedTodos = this.state.todosList.map(todo => {
            if (todo.id === id) {
                return { ...todo, todoItem: updatedTodo };
            }
            return todo;
        });
        this.setState({
            todosList: updatedTodos
        });
    }
    toggleCompletion(id) {
        const updatedTodos = this.state.todosList.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
        this.setState({
            todosList: updatedTodos
        });
    }

    render() {
        const todos = this.state.todosList.map(todo => {
            return <Todo
                key={todo.id}
                id={todo.id}
                todoItem={todo.todoItem}
                completed={todo.completed}
                removeTodoItem={this.removeTodo}
                updateTodoItem={this.updateTodo}
                toggleTodo={this.toggleCompletion}
            />
        });

        return (
            <div className="TodoList">
                <h1>
                    Todo List! <span>A Simple React Todo List App.</span>
                </h1>
                <NewTodoForm addNewTodo={this.createTodo} />
                <ul>{todos}</ul>
            </div>
        );
    }
}

export default TodoList;