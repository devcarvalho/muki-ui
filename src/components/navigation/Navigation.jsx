import React from "react";
import BottomNavigation from '@mui/material/BottomNavigation';
import Paper from '@mui/material/Paper';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useNavigate } from "react-router-dom";

import {ReactComponent as CreditCard} from '../../assets/icons/credit-card.svg';
import {ReactComponent as Database} from '../../assets/icons/database.svg';
import {ReactComponent as Home} from '../../assets/icons/home.svg';
import {ReactComponent as PieChart} from '../../assets/icons/pie-chart.svg';
import {ReactComponent as PlusCircle} from '../../assets/icons/plus-circle.svg';

function Navigation() {
  const navigate = useNavigate();
  const [value, setValue] = React.useState('home');

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: "#fff", boxShadow: "0px -15px 10px rgba(13, 22, 54, 0.05)", height: "88px"}}>
      <BottomNavigation
    value={value}
    onChange={(event, newValue) => {
      setValue(newValue);
    }}
    sx={{backgroundColor: "#fff", height: "88px"}}
  >
    <BottomNavigationAction value="home" onClick={() => navigate("home")} icon={<Home />} sx={{backgroundColor: "#fff"}} />
    <BottomNavigationAction value="card" onClick={() => navigate("settings")} icon={<CreditCard />} sx={{backgroundColor: "#fff"}} />
    <BottomNavigationAction value="plus" onClick={() => navigate("settings")} icon={<PlusCircle />} sx={{backgroundColor: "#fff"}} />
    <BottomNavigationAction value="calendar" onClick={() => navigate("calendar")} icon={<PieChart />} sx={{backgroundColor: "#fff"}} />
    <BottomNavigationAction value="settings" onClick={() => navigate("settings")} icon={<Database />} sx={{backgroundColor: "#fff"}} />
  </BottomNavigation>
    </Paper>
    
  );
}

export default Navigation;
