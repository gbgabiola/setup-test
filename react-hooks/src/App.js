// import { useEffect } from 'react';
import { useFetch } from './useFetch';
import { useForm } from './useForm';

const App = () => {
  const [values, handleChange] = useForm({
    email: '',
    password: '',
    firstName: '',
  });

  const { data, loading } = useFetch('http://numbersapi.com/43/trivia');

  return (
    <div>
      <div>{loading ? 'loading...' : data}</div>
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
