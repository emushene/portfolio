// Blog.tsx
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../Components/Blog/AuthContext"; // Import the useAuth hook

const Blog = () => {
  const { isAuth, setIsAuth } = useAuth(); // Get isAuth and setIsAuth from context

  const handleLogout = () => {
    // Clear authentication and update state
    localStorage.removeItem("isAuth");
    setIsAuth(false);
  };

  return (
    <div className="flex flex-col mx-auto w-[80%]">
      <div className="w-full flex-1 text-gray-700 p-4 flex justify-between">
        {isAuth ? (
          <>
            <div className="cursor-pointer border border-red-400 p-2 rounded-md font-thin text-gray-700 text-sm">
              <Link to="blog-create">
                <h2>Create New Entry</h2>
              </Link>
            </div>
            <div
              className="cursor-pointer border border-red-400 p-2 rounded-md font-thin text-gray-100 text-sm bg-gray-600"
              onClick={handleLogout} // Add logout functionality
            >
              Logout
            </div>
          </>
        ) : (
          <div className="cursor-pointer border border-red-400 p-2 rounded-md font-thin text-gray-700 text-sm">
            <Link to="blog-login">Login</Link>
          </div>
        )}
      </div>

      <div className="h-[70vh] p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Blog;
