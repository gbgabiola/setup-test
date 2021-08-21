const Todo = props => (
  <div
    style={{ textDecoration: props.todo.isComplete ? 'line-through' : 'none' }}
    onClick={props.toggleComplete}
  >
    {props.todo.text}
  </div>
);

export default Todo;
