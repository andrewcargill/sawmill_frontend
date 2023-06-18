import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        {/* Add more routes for other components */}
      </Routes>
    </Router>
  );
}

export default App;
