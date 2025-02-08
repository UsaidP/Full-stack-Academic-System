import { Provider } from "react-redux";
import "./App.css";
import AuthLayout from "./Components/authLayout/AuthLayout";
import store from "./store/store";
import authService from "./appwrite/auth";
import { useDispatch } from "react-redux";
import { login } from "./store/authSlice";
import AdminNav from "./Components/home/admin/navbar/AdminNav";

function App() {
  return (
    <Provider store={store}>
      <div></div>
    </Provider>
  );
}

export default App;
