import React from 'react';
import { Button } from 'react-bootstrap';
import Test from './components/Test';
import CreateData from './components/Createdata';

const Home = () => {
  return (
    <div>
      <h1>HOME</h1>
      <Button variant="primary">Test Button</Button>
      <h2>Test Component - retrieve</h2>
      <Test />
      <h2>Createdata Component - post</h2>
      <CreateData />
      
    </div>
  );
};

export default Home;
