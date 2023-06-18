import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Home from './home';

function App() {
  return (
    <Router>
      <Route>
        <Route exact path="/" component={Home} />
        {/* Add more routes for other components */}
      </Route>
    </Router>
  );
}

export default App;
