import { useEffect } from 'react';
import { useForm } from './useForm';

const App = () => {
  const [values, handleChange] = useForm({
    email: '',
    password: '',
    firstName: '',
  });

  // const [showHello, setShowHello] = useState(true);

  useEffect(() => {
    const onMouseMove = e => {
      console.log(e);
    };
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div>
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
