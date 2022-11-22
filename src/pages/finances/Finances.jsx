import { Routes, Route } from "react-router-dom";
import React from "react";
import { styled } from "@mui/system";

import Calendar from "./calendar/Calendar";
import Dashboard from "./dashboard/Dashboard";
import Settings from "./settings/Settings";
import Navigation from "../../components/navigation/Navigation";
import Header from "../../components/header/Header";

function Finances() {
  const Content = styled("div")`
    height: 100vh;
  `;
  return (
    <Content>
      <Header/>
      <Routes>
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      <Navigation />
    </Content>
  );
}

export default Finances;
