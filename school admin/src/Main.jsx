import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Components/authLayout/register/Register.jsx";
import AuthLayout from "./Components/authLayout/AuthLayout.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import AdminNavContainer from "./Components/home/admin/navbar/AdminNavContainer.jsx";
import StudentNavContainer from "./Components/home/Student/navbar/StudentNavContainer.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin" element={<AdminNavContainer />} />
        <Route path="/login" element={<AuthLayout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/student" element={<StudentNavContainer />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
