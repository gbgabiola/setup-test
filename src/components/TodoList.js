import React, { Component } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

/*
  [x] 1. Add todo
  [x] 2. Display todos
  [x] 3. Cross off todo
  [x] 4. Show number of active todos
  [x] 5. Filter all/active/complete todos
  [x] 6. Delete todo
  [ ] 7. Delete all complete
        7.1 Only show if at least one is complete
  [ ] 8. Toggle all on/off

*/

export default class TodoList extends Component {
  state = {
    todos: [],
    todosToShow: 'all',
  };

  addTodo = todo => {
    this.setState({
      todos: [todo, ...this.state.todos],
    });
  };

  toggleComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            // id: todo.id,
            // text: todo.text,
            ...todo,
            isComplete: !todo.isComplete,
          };
        } else {
          return todo;
        }
      }),
    });
  };

  updateTodoToShow = str => {
    this.setState({
      todosToShow: str,
    });
  };

  deleteTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id),
    });
  };

  deleteAllCompletedTodos = () => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.isComplete),
    });
  };

  render() {
    let todos = [];

    if (this.state.todosToShow === 'all') {
      todos = this.state.todos;
    } else if (this.state.todosToShow === 'active') {
      todos = this.state.todos.filter(todo => !todo.isComplete);
    } else if (this.state.todosToShow === 'completed') {
      todos = this.state.todos.filter(todo => todo.isComplete);
    }

    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        {todos.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            onDelete={() => this.deleteTodo(todo.id)}
            toggleComplete={() => this.toggleComplete(todo.id)}
          />
        ))}

        <div>
          todos left: {this.state.todos.filter(todo => !todo.isComplete).length}
        </div>

        <div>
          <button onClick={() => this.updateTodoToShow('all')}>All</button>
          <button onClick={() => this.updateTodoToShow('active')}>
            Active
          </button>
          <button onClick={() => this.updateTodoToShow('completed')}>
            Completed
          </button>
        </div>

        {this.state.todos.some(todo => todo.isComplete) ? (
          <div>
            <button onClick={this.deleteAllCompletedTodos}>
              Remove All Complete Todos
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}
