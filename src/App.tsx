import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import MainPage from './pages/MainPage';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Route path="/">
          <MainPage />
        </Route>
      </Layout>
    </Router>
  );
}

export default App;
