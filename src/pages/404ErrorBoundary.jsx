import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaExclamationTriangle } from 'react-icons/fa';

const Error404Boundary = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <FaExclamationTriangle className="mx-auto h-12 w-12 text-black" />
        <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">404 Error</h1>
        <p className="mt-2 text-center text-sm text-gray-600">Oops! The page you're looking for does not exist.</p>
        <p className="mt-2 text-center text-sm text-gray-600">
          Click <Link to="/" className="font-medium text-indigo-600 hover:text-indigo-500"><FaHome className="inline" /> here</Link> to navigate to the home page.
        </p>
      </div>
    </div>
  );
};

export default Error404Boundary;