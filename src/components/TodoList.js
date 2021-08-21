import React, { Component } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

/*
  [x] 1. Add todo
  [x] 2. Display todos
  [x] 3. Cross off todo
  [ ] 4. Show number of active todos
  [ ] 5. Filter all/active/complete todos
  [ ] 6. Delete todo
  [ ] 7. Delete all complete
        7.1 Only show if at least one is complete
  [ ] 8. Toggle all on/off

*/

export default class TodoList extends Component {
  state = {
    todos: [],
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

  render() {
    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        {this.state.todos.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleComplete={() => this.toggleComplete(todo.id)}
          />
        ))}
      </div>
    );
  }
}
