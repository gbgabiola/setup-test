import React, { useState } from 'react';

const App = () => {
  // const [count, setCount] = useState(10);
  // const [{ count, count2 }, setCount] = useState({ count: 10, count2: 20 });
  const [count, setCount] = useState(10);
  const [count2, setCount2] = useState(20);

  return (
    <div>
      {/* <button onClick={() => setCount(count => count + 1)}>+</button> */}
      <button
        onClick={() => {
          setCount(count => count + 1);
          setCount2(count => count + 1);
        }}
      >
        +
      </button>
      {/* <button
        onClick={() =>
          setCount(currentState => ({
            ...currentState,
            count: currentState.count + 1,
          }))
        }
      >
        +
      </button> */}
      <div>count 1: {count}</div>
      <div>count 2: {count2}</div>
    </div>
  );
};

export default App;
