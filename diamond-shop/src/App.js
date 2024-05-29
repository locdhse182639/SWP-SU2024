import React from 'react';
import './App.css';
import AppRoute from './routes/appRoute';
import { AuthProvider } from './components/authcontext';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <AppRoute />
      </AuthProvider>
    </div>
  );
}

export default App;
