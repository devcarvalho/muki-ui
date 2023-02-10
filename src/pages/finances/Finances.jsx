import { Routes, Route } from "react-router-dom";
import React from "react";
import { styled } from "@mui/system";

import Bills from "./bills/Bills";
import Dashboard from "./dashboard/Dashboard";
import Outings from "./outings/Outings";
import Navigation from "../../components/navigation/Navigation";
import Planning from "./planning/Planning";
import AddOutings from "./outings/AddOutings";
import ToBuy from "./buy/ToBuy";
import AddItemToBuy from "./buy/AddItemToBuy";

function Finances() {
  const Content = styled("div")`
    height: 100vh;
  `;
  return (
    <Content>
      <Routes>
        <Route path="/bills" element={<Bills />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/outings" element={<Outings />} />
        <Route path="/planning" element={<Planning />} />
        <Route path="/addOutings" element={<AddOutings />} />
        <Route path="/toBuy" element={<ToBuy />} />
        <Route path="/addItemToBuy" element={<AddItemToBuy />} />
      </Routes>
      <Navigation />
    </Content>
  );
}

export default Finances;
