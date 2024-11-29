// src/pages/NotFound.js
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
        <p className="text-lg text-gray-700 mt-4">Sorry, the page you are looking for does not exist.</p>
        <Link to="/" className="mt-4 text-blue-500 hover:underline">
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
