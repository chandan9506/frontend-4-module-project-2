import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InitialComp from './Components/InitialComp';
import FinalComp from './Components/FinalComp';

const App = () => {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<InitialComp />} />
        <Route path="/results" element={<FinalComp />} />
      </Routes>
    </Router>
      
    </div>
  );
};

export default App;