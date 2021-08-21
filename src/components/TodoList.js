import React, { Component } from 'react';
import TodoForm from './TodoForm';

/*
  [x] 1. Add todo
  [x] 2. Display todos
  [ ] 3. Cross off todo
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

  render() {
    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        {this.state.todos.map(todo => (
          <div key={todo.id}>{todo.text}</div>
        ))}
      </div>
    );
  }
}
