import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginBackground from "../asset/images/login_background.png"; // Import the background image
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setAuthenticated } = useAuth(); // Use the setAuthenticated function from context

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple authentication logic
    if (username === "obct" && password === "12345") {
      setAuthenticated(true); // Set authenticated to true
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${loginBackground})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Use flex and items-start for top alignment, with margin top */}
      <div className="flex justify-center items-start min-h-screen bg-black bg-opacity-40 pt-16"> {/* Add pt-16 to provide padding-top */}
        <div className="bg-white bg-opacity-30 p-8 rounded-lg shadow-md max-w-sm w-full">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="username">
                Username
              </label>
              <input
                id="username"
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
