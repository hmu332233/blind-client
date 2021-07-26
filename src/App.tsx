import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import MainPage from './pages/MainPage';
import EntryPage from './pages/EntryPage';
import Layout from './components/Layout';

import { NameProvider } from './contexts/NameContext';

function App() {
  return (
    <Router>
      <Layout>
        <NameProvider>
          <Switch>
            <Route exact path="/entry">
              <EntryPage />
            </Route>
            <Route exact path="/">
              <MainPage />
            </Route>
          </Switch>
        </NameProvider>
      </Layout>
    </Router>
  );
}

export default App;
