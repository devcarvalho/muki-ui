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
import { useDispatch, useSelector } from "react-redux";
import { setPopper } from "../../features/navigation/navigationSlice";


function Finances() {
  const { showPopper } = useSelector( ( state ) => state.navigation );
  const dispatch = useDispatch();

  const Content = styled("div")`
    height: 100vh;
  `;

  const Wrapper = styled("div")`
    position: relative;
    height: calc(100vh - 88px);
    overflow-x: auto;
  `;

  const Overlay = styled("div")`
    position: absolute;
    height: 100%;
    width: 100%;
    overflow-x: auto;
    background: #0D1636;
    mix-blend-mode: multiply;
    opacity: 0.7;
    z-index: 9;
  `;

  return (
    <Content>
      <Wrapper>
        {showPopper && <Overlay onClick={() => dispatch(setPopper(false))} />}
        <Routes>
          <Route path="/bills" element={<Bills />} />
          <Route path="/home" element={<Dashboard />} />
          <Route path="/outings" element={<Outings />} />
          <Route path="/planning" element={<Planning />} />
          <Route path="/add-outings" element={<AddOutings />} />
          <Route path="/toBuy" element={<ToBuy />} />
          <Route path="/add-item-to-buy" element={<AddItemToBuy />} />
        </Routes>
      </Wrapper>
      <Navigation />
    </Content>
  );
}

export default Finances;
