import React from 'react';

// Lessons.js - Curriculum Page Component
export default function Lessons() {
  return (
    <div className="p-8">
      <nav className="flex space-x-6 mb-8">
        <a href="/" className="text-lg font-semibold">Home</a>
        <a href="/curriculum" className="text-lg">Curriculum</a>
        <a href="/lessons" className="text-lg font-bold">Lessons</a>
        <a href="/resources" className="text-lg">Resources</a>
      </nav>

      <h1 className="text-3xl font-extrabold mb-4">Course Lessons</h1>
      <p className="mb-6">4-week Computer Hardware & Software Maintenance Program</p>

      {/** Curriculum overview sections go here **/}

      <div className="mt-12 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-bold mb-3">Ready to Get Started?</h2>
        <ol className="list-decimal list-inside space-y-1 text-gray-700">
          <li>Pick "Session 5" from the navigation to begin today’s lesson.</li>
          <li>Follow each lesson’s step-by-step tutorials and hands-on tasks.</li>
          <li>Return to this page to access other sessions when available.</li>
        </ol>
        <a href="/session5" className="mt-4 inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded hover:bg-green-700">
          Go to Session 5
        </a>
      </div>
    </div>
  );
}
