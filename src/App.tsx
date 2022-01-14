import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
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
          <Routes>
            <Route path="/entry" element={<EntryPage />} />
            <Route path="/" element={<MainPage />} />
          </Routes>
        </NameProvider>
      </Layout>
    </Router>
  );
}

export default App;
