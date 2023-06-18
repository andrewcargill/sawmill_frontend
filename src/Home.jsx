import React from 'react';
import { Button } from 'react-bootstrap';
import Test from './components/Test';

const Home = () => {
  return (
    <div>
      <h1>HOME</h1>
      <Button variant="primary">Test Button</Button>
      <Test />
    </div>
  );
};

export default Home;
