import "./App.scss";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Login from "./pages/login/Login";
import UserRegister from "./pages/user-register/UserRegister";
import PasswordRecovery from "./pages/password-recovery/PasswordRecovery";
import Finances from "./pages/finances/Finances.jsx";

import { theme } from "./mui-theme";
import store from "./store";


function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/password-recovery" element={<PasswordRecovery />} />
            <Route path="/user-register" element={<UserRegister />} />
            <Route path="/finances/*" element={<Finances />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
    );
}

export default App;
