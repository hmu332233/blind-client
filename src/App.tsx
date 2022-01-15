import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import { app, auth } from './utils/firebase';

import MainPage from './pages/MainPage';
import EntryPage from './pages/EntryPage';
import SignInRedirect from './pages/SignInRedirect';
import Layout from './components/Layout';

import { AuthProvider } from './contexts/AuthContext';


function App() {
  return (
    <Router>
        <AuthProvider>
        <Routes>
          <Route path="/signin/redirect" element={<SignInRedirect />} />
            <Route path="/" element={<Layout />}>
                <Route path="/entry" element={<EntryPage />} />
                <Route index element={<MainPage />} />
            </Route>
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Routes>
        </AuthProvider>
    </Router>
  );
}

export default App;
