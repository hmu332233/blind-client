import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import MainPage from './pages/MainPage';

function App() {
  return (
    <Router>
      <Route path="/">
        <MainPage />
      </Route>
    </Router>
  );
}

export default App;
