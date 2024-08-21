import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
// Import the ThemeProvider

const TermsOfService = lazy(() => import('./TermsOfService'));

const LoadingSpinner: React.FC = () => (
  <div className="loading-spinner">
    Loading...
  </div>
);

const App: React.FC = () => {
  return (
      <Router>
        <Header />
        <div className="app-background">
          <main className="main-content">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<TermsOfService />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
              </Routes>
            </Suspense>
          </main>
        </div>
        
      </Router>
  );
};

export default App;
