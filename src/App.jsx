import "./App.scss";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/login/Login";
import UserRegister from "./pages/user-register/UserRegister";
import PasswordRecovery from "./pages/password-recovery/PasswordRecovery";
import Finances from "./pages/finances/Finances.jsx";

import { theme } from "./mui-theme";


function App() {
  return (
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
  );
}

export default App;
