import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import img4 from "../utils/user-blue-gradient_78370-4692.jpg.avif";

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Retrieve user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    
    if (!storedUser) {
      // If no user is logged in, navigate to login page
      navigate("/auth/login");
    } else {
      setUser(storedUser);
    }
  }, [navigate]);

  const handleLogout = () => {
    // Remove user from localStorage and navigate to login page
    localStorage.removeItem("user");
    navigate("/auth/login");
  };

  return (
    <div className="bg-gradient-to-r from-teal-400 to-cyan-500 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md text-center">
        <div className="mb-6">
          <h1 className="text-3xl font-semibold text-sky-600 mb-2">Welcome to UnStop!</h1>
          <p className="text-xl text-gray-600">The platform where opportunities meet excellence.</p>
        </div>
        
        {user ? (
          <>
            <div className="mb-6">
              <img
                src={img4}
                alt="User Avatar"
                className="w-32 h-32 rounded-full mx-auto border-4 border-sky-500"
              />
            </div>

            <h2 className="text-2xl font-semibold text-sky-600 mb-2">{user.username}</h2>
            <p className="text-lg text-gray-500 mb-4">{user.email}</p>

            <button
              onClick={handleLogout}
              className="px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300"
            >
              Logout
            </button>
          </>
        ) : (
          <p className="text-lg text-gray-500">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Home;
