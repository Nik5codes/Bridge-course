import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [User, setUser] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    const user = User.trim().toLowerCase();

    if (user === "admin") {
      navigate("/admin");
    } else if (user === "mentor") {
      navigate("/mentor");
    } else if (user === "student") {
      navigate("/student");
    } else {
      alert("Invalid user. Please type Admin, Mentor, or Student.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-lime-100">
      <div className="w-full max-w-md p-8 bg-white shadow-xl rounded-xl border border-purple-300">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
          Login Page
        </h2>

        <div className="mb-4">
          <label className="block text-left font-medium text-gray-700 mb-1">Username</label>
          <input
            type="text"
            placeholder="Enter username"
            onChange={(e) => setUser(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 bg-pink-100"
          />
        </div>

        <div className="mb-6">
          <label className="block text-left font-medium text-gray-700 mb-1">Password</label>
          <input
            type="password"
            placeholder="Password not required"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 bg-pink-100"
          />
        </div>

        <button
          type="submit"
          onClick={handleClick}
          className="w-full py-2 bg-green-200 text-purple-700 font-semibold rounded-lg border-2 border-purple-400 hover:bg-green-300 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
