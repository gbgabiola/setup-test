const Todo = props => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <div
      style={{
        textDecoration: props.todo.isComplete ? 'line-through' : 'none',
      }}
      onClick={props.toggleComplete}
    >
      {props.todo.text}
    </div>
    <button onClick={props.onDelete}>x</button>
  </div>
);

export default Todo;
