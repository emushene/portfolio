import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>
      <p className="mt-4 text-lg text-gray-500">Sorry, the page you're looking for doesn't exist.</p>
      <Link to="/" className="mt-6 text-blue-500 underline">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
