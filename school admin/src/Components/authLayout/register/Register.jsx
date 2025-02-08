import { useState } from "react";
import authService from "../../../appwrite/auth";

const Register = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.createAccount(credentials);
    } catch (error) {
      setError("Name or Email is already in use or server error", error);
      console.log("Name or Email is already in use or server error", error);
    }
  };
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-700">
        <div className="bg-white p-8 rounded-lg shadow-md xl:w-192  md:w-96 sm:w-96">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                value={credentials.name}
                onChange={(e) =>
                  setCredentials({ ...credentials, name: e.target.value })
                }
              />
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
              Register
            </button>
          </form>
          <div className="flex justify-center mt-2">
            <p>Already have an account? </p>
            <a className="ml-1 text-blue-600" href="/login">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
