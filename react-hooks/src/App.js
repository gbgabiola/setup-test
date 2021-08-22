import { useState } from 'react';
import { useFetch } from './useFetch';
import { useForm } from './useForm';

const App = () => {
  const [values, handleChange] = useForm({
    email: '',
    password: '',
    firstName: '',
  });

  const [count, setCount] = useState(0);
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  return (
    <div>
      <div>{!data ? 'loading...' : data}</div>
      <div>count: {count}</div>
      <button onClick={() => setCount(c => c + 1)}>increment</button>
      {/* <button onClick={() => setShowHello(!showHello)}>Toggle</button> */}
      {/* {showHello && <Hello />} */}
      <input
        name="email"
        value={values.email}
        placeholder="Email"
        onChange={handleChange}
      />
      <input
        name="firstName"
        value={values.firstName}
        placeholder="First name"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={values.password}
        placeholder="Password"
        onChange={handleChange}
      />
    </div>
  );
};

export default App;
