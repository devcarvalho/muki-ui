import React from "react";
import BottomNavigation from '@mui/material/BottomNavigation';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import { ReactComponent as CreditCard } from '../../assets/icons/credit-card.svg';
import { ReactComponent as Database } from '../../assets/icons/database.svg';
import { ReactComponent as Home } from '../../assets/icons/home.svg';
import { ReactComponent as PieChart } from '../../assets/icons/pie-chart.svg';
import { ReactComponent as PlusCircle } from '../../assets/icons/plus-circle.svg';

function Navigation() {
  const navigate = useNavigate();
  const [value, setValue] = React.useState('home');
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePlusClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: "#fff", boxShadow: "0px -15px 10px rgba(13, 22, 54, 0.05)", height: "88px" }}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{ backgroundColor: "#fff", height: "88px" }}
      >
        <BottomNavigationAction value="home" onClick={() => navigate("home")} icon={<Home />} sx={{ backgroundColor: "#fff" }} />
        <BottomNavigationAction value="card" onClick={() => navigate("outings")} icon={<CreditCard />} sx={{ backgroundColor: "#fff" }} />
        <BottomNavigationAction value="plus" aria-describedby={id} onClick={handlePlusClick} icon={<PlusCircle />} sx={{ backgroundColor: "#fff" }} />
        <BottomNavigationAction value="bills" onClick={() => navigate("bills")} icon={<Database />} sx={{ backgroundColor: "#fff" }} />
        <BottomNavigationAction value="calendar" onClick={() => navigate("toBuy")} icon={<PieChart />} sx={{ backgroundColor: "#fff" }} />
      </BottomNavigation>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
        
        <Link href="AddOutings">Adicionar Saída</Link>
        <br /><hr />
        <Link href="Planning">Planejamento</Link>
       
        </Box>
      </Popper>
    </Paper>

  );
}

export default Navigation;
