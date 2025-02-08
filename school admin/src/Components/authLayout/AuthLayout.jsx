import { useState, useEffect } from "react";
import Login from "./login/Login";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { login, logout } from "../../store/authSlice";

const AuthLayout = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      await authService
        .getCurrentUser()
        .then((user) => {
          if (user) {
            dispatch(login({ user })); // Dispatch login action
          } else {
            dispatch(logout()); // Dispatch logout action
          }
        })
        .catch((error) => {
          console.error("Error fetching current user:", error);
        })
        .finally(() => setLoading(false)); // Set loading to false after the process
    };
    fetchCurrentUser();
  }, [dispatch]);

  return !loading ? <Login /> : <div>Loading...</div>;
};

export default AuthLayout;
