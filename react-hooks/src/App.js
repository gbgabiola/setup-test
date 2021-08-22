import { useEffect } from 'react';
import { useForm } from './useForm';

const App = () => {
  const [values, handleChange] = useForm({
    email: '',
    password: '',
    firstName: '',
  });

  useEffect(() => {
    console.log('Render');
  }, [values.email, values.password]);

  // useEffect(() => {
  //   console.log('Render');
  // }, []);

  return (
    <div>
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
