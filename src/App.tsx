import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import { app, auth } from './utils/firebase';

import MainPage from './pages/MainPage';
import SignInPage from './pages/SignIn';
import SignInRedirect from './pages/SignInRedirect';
import SignInComplete from './pages/SignInComplete';
import Layout from './components/Layout';
import RequireAuth from './components/RequireAuth';

import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <RequireAuth>
                  <MainPage />
                </RequireAuth>
              }
            />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signin/complete" element={<SignInComplete />} />
          </Route>
            <Route path="/signin/redirect" element={<SignInRedirect />} />
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
