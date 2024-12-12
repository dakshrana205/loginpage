import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoMdKey, IoMdMail } from "react-icons/io";
import img from "../utils/login-concept-illustration_114360-739.jpg.avif";
import img2 from "../utils/g.avif";
import img3 from "../utils/Screenshot 2024-12-13 at 12.57.59 AM.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is already logged in
    const userData = localStorage.getItem("user");
    if (userData) {
      navigate("/home");
    }
  }, [navigate]);

  const validateForm = () => {
    const newErrors = {};
    if (username !== "emilys") {
      newErrors.username = "Username must be 'emilys'";
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
    }
    if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    return newErrors;
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      // Simulate successful login and store user data
      const userData = { username, email, password };
      localStorage.setItem("user", JSON.stringify(userData)); // Store the user data in localStorage
      navigate("/home"); // Redirect to the home page
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-400 to-cyan-500">

      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="w-1/2">
          <img 
            src={img} 
            alt="Login Illustration" 
            className="w-full h-full object-cover" 
          />
        </div>

        <div className="w-1/2 p-8">
          <h1 className="text-4xl font-bold text-sky-500 mb-6">Welcome</h1>

          <form onSubmit={handleLogin}>
            <div className="space-y-4">
              {/* Username Field */}
              <div className="flex items-center space-x-3 mb-4 bg-gray-100 p-3 rounded-lg shadow-sm">
                <MdOutlineAccountCircle size={24} />
                <div className="flex-1">
                  <label htmlFor="username" className="block text-xs font-medium text-gray-700 mb-1">Username</label>
                  <input
                    id="username"
                    type="text"
                    placeholder="Enter Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full h-10 p-2 text-sm bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                  />
                </div>
              </div>
              {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}

              {/* Email Field */}
              <div className="flex items-center space-x-3 mb-4 bg-gray-100 p-3 rounded-lg shadow-sm">
                <IoMdMail size={24} />
                <div className="flex-1">
                  <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-10 p-2 text-sm bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                  />
                </div>
              </div>
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

              {/* Password Field */}
              <div className="flex items-center space-x-3 mb-4 bg-gray-100 p-3 rounded-lg shadow-sm">
                <IoMdKey size={24} />
                <div className="flex-1">
                  <label htmlFor="password" className="block text-xs font-medium text-gray-700 mb-1">Password</label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full h-10 p-2 text-sm bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                  />
                </div>
              </div>
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

              {/* Remember Me and Forgot Password */}
              <div className="flex items-center space-x-60">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="rememberMe" />
                  <label htmlFor="rememberMe">Remember Me</label>
                </div>
                <a href="#" className="text-sky-500">Forgot Password?</a>
              </div>

              {/* Login Button */}
              <div className='py-2'>
                <button 
                  type="submit" 
                  className="w-full p-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition duration-200"
                >
                  Login
                </button>
              </div>

              {/* Sign Up Link */}
              <div>
                <p className="text-center text-sm text-gray-500">Don't have an account? <a href="#" className="text-sky-500">Sign Up</a></p>
              </div>

              {/* Error Message */}
              {errors.api && <p className="text-red-500 text-center">{errors.api}</p>}

              {/* Social Login Buttons */}
              <div className="space-y-4 mt-6">
                <div className="flex space-x-4">
                  {/* Google Login */}
                  <div className="w-full">
                    <button className="w-full p-3 flex items-center justify-center text-black border border-gray-300 rounded-lg transition duration-200">
                      <img src={img2} className="w-6 h-6 mr-2" alt="Google logo" />
                      Login with Google
                    </button>
                  </div>

                  {/* Facebook Login */}
                  <div className="w-full">
                    <button className="w-full p-3 flex items-center justify-center text-black border border-gray-300 rounded-lg transition duration-200">
                      <img src={img3} className="w-6 h-6 mr-2" alt="Facebook logo" />
                      Login with Facebook
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
