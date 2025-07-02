import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Lessons from './Lessons';
import Session5Page from './Session5Page';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-white shadow py-4">
          <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
            <Link to="/" className="text-xl font-extrabold text-gray-800">Home</Link>
            <div className="space-x-4">
              <Link to="/lessons" className="text-gray-600 hover:text-gray-800">Curriculum</Link>
              <Link to="/session5" className="text-gray-600 hover:text-gray-800">Session 5</Link>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <main className="py-8 px-6">
          <Routes>
            <Route path="/" element={<Navigate to="/lessons" replace />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/session5" element={<Session5Page />} />
            {/* Future session routes go here */}
            <Route path="*" element={<div className="text-center text-gray-700">Page not found</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
