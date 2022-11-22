import React from "react";
import BottomNavigation from '@mui/material/BottomNavigation';
import Paper from '@mui/material/Paper';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useNavigate } from "react-router-dom";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';

function Navigation() {
  const navigate = useNavigate();
  const [value, setValue] = React.useState('home');

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: "#97ABB1" }} elevation={3}>
      <BottomNavigation
    value={value}
    onChange={(event, newValue) => {
      setValue(newValue);
    }}
    sx={{backgroundColor: "#97ABB1"}}
  >
    <BottomNavigationAction value="calendar" onClick={() => navigate("calendar")} icon={<CalendarMonthIcon />} sx={{backgroundColor: "#97ABB1"}} />
    <BottomNavigationAction value="home" onClick={() => navigate("home")} icon={<HomeIcon />} sx={{backgroundColor: "#97ABB1"}} />
    <BottomNavigationAction value="settings" onClick={() => navigate("settings")} icon={<SettingsIcon />} sx={{backgroundColor: "#97ABB1"}} />
  </BottomNavigation>
    </Paper>
    
  );
}

export default Navigation;
