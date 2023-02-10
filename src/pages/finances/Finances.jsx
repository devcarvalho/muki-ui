import { Routes, Route } from "react-router-dom";
import React from "react";
import { styled } from "@mui/system";

import Calendar from "./calendar/Calendar";
import Dashboard from "./dashboard/Dashboard";
import Outings from "./outings/Outings";
import Navigation from "../../components/navigation/Navigation";
import Planning from "./planning/Planning";
import AddOutings from "./outings/AddOutings";

function Finances() {
  const Content = styled("div")`
    height: 100vh;
  `;
  return (
    <Content>
      <Routes>
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/outings" element={<Outings />} />
        <Route path="/planning" element={<Planning />} />
        <Route path="/addOutings" element={<AddOutings />} />
      </Routes>
      <Navigation />
    </Content>
  );
}

export default Finances;
