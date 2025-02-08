// components/Login.js
import { useState } from "react";
import { login } from "../../../store/authSlice";
import { useDispatch } from "react-redux";
import authService from "../../../appwrite/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const session = await authService.login(credentials);

      const currentUser = await authService.getCurrentUser();
      console.log(currentUser);
      if (currentUser) dispatch(login(currentUser));
      navigate("/admin");
      console.log("Login successful:", session);
    } catch (error) {
      setError("Login failed:", error);
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-700">
      <div className="bg-white p-8 rounded-lg shadow-md xl:w-192  md:w-96 sm:w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded-md"
              value={credentials.email}
              onChange={(e) =>
                setCredentials({ ...credentials, email: e.target.value })
              }
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded-md"
              value={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Login
          </button>
        </form>
        <div className="flex justify-between mt-2">
          <p>New User? </p>
          <a className=" text-blue-600" href="/register">
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
