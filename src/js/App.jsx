import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from './components/structural/Menu';
import MainContainer from './components/structural/MainContainer';

const App = () => (
  <Router>
    <div>
      <Menu />
      <MainContainer />
    </div>
  </Router>
);

export default App;