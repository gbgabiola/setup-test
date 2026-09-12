import { useEffect } from 'react';

const Hello = () => {
  useEffect(() => {
    console.log('Render');

    return () => {
      console.log('unmount');
    };
  }, []);

  return <div>Hello</div>;
};

export default Hello;
