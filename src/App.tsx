import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import InvoiceUpload from './pages/InvoiceUpload';
import UserManagement from './pages/UserManagement';
import './App.css';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/upload" element={<InvoiceUpload />} />
        <Route path="/users" element={<UserManagement />} />
      </Routes>
    </div>
  );
}

export default App;