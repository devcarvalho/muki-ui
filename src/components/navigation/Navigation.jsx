import { styled } from "@mui/system";
import BottomNavigation from '@mui/material/BottomNavigation';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as CreditCard } from '../../assets/icons/credit-card.svg';
import { ReactComponent as Database } from '../../assets/icons/database.svg';
import { ReactComponent as Home } from '../../assets/icons/home.svg';
import { ReactComponent as PieChart } from '../../assets/icons/pie-chart.svg';
import { ReactComponent as PlusCircle } from '../../assets/icons/plus-circle.svg';
import { ReactComponent as ChevronRight } from '../../assets/icons/chevron-right.svg';

import { setPopper } from "../../features/navigation/navigationSlice";

function Navigation() {
  const { showPopper } = useSelector( ( state ) => state.navigation );
  const dispatch = useDispatch();
  const navigate = useNavigate();
	
  const id = 'simple-popper';

  const handlePlusClick = (event) => {
    dispatch(setPopper(!showPopper));
  };

  const toWhite = (component) => {
    const Styled = styled(component)`
      path {
        stroke: #fff;
      }
    `;
    return <Styled />
  }

  const toBlue = (component) => {
    const Styled = styled(component)`
      path {
        stroke: #fff;
      }
    `;
    const Wrapper = styled("div")`
      height: 48px;
      width: 48px;
      background: linear-gradient(180deg, #44BBFE 0%, #1E78FE 100%);
      box-shadow: 0px 15px 35px rgba(32, 124, 254, 0.2);
      border-radius: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    `;
    return <Wrapper> <Styled/> </Wrapper>
  }

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: "#fff", boxShadow: "0px -15px 10px rgba(13, 22, 54, 0.05)", height: "88px" }}>
      <BottomNavigation
        sx={{ height: "88px" }}
      >
        <BottomNavigationAction onClick={() => navigate("home")} icon={showPopper ? toWhite(Home) : <Home />} sx={{ backgroundColor: showPopper ? "#C0C3CB" : "#fff" }} />
        <BottomNavigationAction onClick={() => navigate("outings")} icon={showPopper ? toWhite(CreditCard) : <CreditCard />} sx={{ backgroundColor: showPopper ? "#C0C3CB" : "#fff" }} />
        <BottomNavigationAction aria-describedby={id} onClick={handlePlusClick} icon={showPopper ? toBlue(PlusCircle) : <PlusCircle />} sx={{ backgroundColor: showPopper ? "#C0C3CB" : "#fff" }} />
        <BottomNavigationAction onClick={() => navigate("bills")} icon={showPopper ? toWhite(Database) : <Database />} sx={{ backgroundColor: showPopper ? "#C0C3CB" : "#fff" }} />
        <BottomNavigationAction onClick={() => navigate("toBuy")} icon={showPopper ? toWhite(PieChart) : <PieChart />} sx={{ backgroundColor: showPopper ? "#C0C3CB" : "#fff" }} />
      </BottomNavigation>
      
      <Popper id={id} open={showPopper} anchorEl={null} sx={{ zIndex: "99", bottom: "92px !important", left: "26% !important", top: "unset !important" }}>
        <Box sx={{
          position: "relative",
          width: "188px",
          height: "113px",
          borderRadius: "15px",
          background: "#B4B6C0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginBottom: "20px",
          "&:after": {
            position: "absolute",
            bottom: "-12px",
            left: "41%",
            content: '""',
            display: "inline-block",
            width: "33px",
            height: "33px",
            transform: "rotate(45deg)",
            background: "#B4B6C0",
            borderBottomRightRadius: "5px",
            zIndex: "-1"
          }
        }}>
          <Typography variant="body3" fontWeight="600" color="#fff" marginLeft="24px" sx={{ display: "flex" }} onClick={() => { navigate("add-outings"); dispatch(setPopper(false)) }}>Adicionar Saída <ChevronRight style={{ marginLeft: "20px" }} /></Typography>
          <hr style={{ borderColor: "rgba(255, 255, 255, 0.2)", width: "100%", margin: "16px 0" }} />
          <Typography variant="body3" fontWeight="600" color="#fff" marginLeft="24px" sx={{ display: "flex" }} onClick={() => { navigate("planning"); dispatch(setPopper(false)) }}>Planejamento  <ChevronRight style={{ marginLeft: "35px" }} /> </Typography>
        </Box>
      </Popper>
    </Paper>
  );
}

export default Navigation;
