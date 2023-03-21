import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './Components/Navigation';
import JV from './routes/JV';
import Varsity from './routes/Varsity';
import Dynasty from './routes/Dynasty';
import { Landing } from './routes/Landing';

const App = () => {
  return (
    <div className="main">
      <Navigation/>
      <Router>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/jv' element={<JV/>}/>
          <Route path='/varsity' element={<Varsity/>}/>
          <Route path='/dynasty' element={<Dynasty/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
