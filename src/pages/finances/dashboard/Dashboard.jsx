import { useState } from "react";
import { Typography, IconButton, Grid, Box, styled } from "@mui/material";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

import { ReactComponent as TrendingUp } from '../../../assets/icons/trending-up.svg';
import { ReactComponent as TrendingDown } from '../../../assets/icons/trending-down.svg';
import { ReactComponent as AlertTriangle } from '../../../assets/icons/alert-triangle.svg';
import { ReactComponent as MoreHorizontal } from '../../../assets/icons/more-horizontal.svg';

import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Header from "../../../components/header/Header";

function Dashboard() {

  const Wrapper = styled("div")`
    padding: 0 24px;
  `;

  const RoundedContainer = styled("div")`
    height: 72px;
    max-width: 100%;
    background: #F7F7F7;
    border-radius: 36px;
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  `;

  const LimitContainer = styled("div")`
    height: 72px;
    max-width: 100%;
    background: #F7F7F7;
    border-radius: 10px;
    margin-top: 25px;
    display: flex;
    padding: 16px 16px 0 16px;
  `;

  const SquareContainer = styled("div")`
    max-height: 170px;
    width: 50%;
    background: #F7F7F7;
    border-radius: 10px;
    padding: 24px 20px;
  `;

  const IncomeIcon = styled("div")`
    height: 48px;
    width: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(180deg, #44BBFE 0%, #1E78FE 100%);
    box-shadow: 0px 15px 35px rgba(32, 124, 254, 0.2);
    border-radius: 24px;
    margin-bottom: 16px;
  `;

  const ExpenseIcon = styled("div")`
    height: 48px;
    width: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(180deg, #FFCF53 0%, #FF9900 100%);
    box-shadow: 0px 10px 30px rgba(255, 153, 0, 0.2);
    border-radius: 24px;
    margin-bottom: 16px;
  `;

  const ExpenditureIcon = styled("div")`
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(177.23deg, #9C2CF3 -13.49%, #3A49F9 109.75%);
    box-shadow: 0px 10px 30px rgba(156, 44, 243, 0.2);
    border-radius: 24px;
  `;

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 5,
    borderRadius: 5,
    width: "100%",
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      background: "linear-gradient(180deg, #FFCF53 0%, #FF9900 100%)"
    },
  }));

  const [showAmount, setShowAmount] = useState(false);

  return (<> 
  <Header/>
  <Wrapper>
    <Typography variant="h3">Carteira</Typography>
    <RoundedContainer>
      <Typography variant="h1">R$ {showAmount ? "16.874,97" : "......"}</Typography>
      <IconButton aria-label="fingerprint" color="secondary" onClick={() => setShowAmount(!showAmount)}>
        {showAmount ? <VisibilityOffOutlinedIcon/> : <VisibilityOutlinedIcon/>}
      </IconButton>
    </RoundedContainer>
    <Grid sx={{ display: "flex", gap: "20px", marginTop: "25px" }}>
      <SquareContainer>
        <IncomeIcon>
          <TrendingUp />
        </IncomeIcon>
        <Typography variant="body1">Aporte</Typography>
        <Typography variant="h3" marginTop="5px">+ R$ 12.302,88</Typography>
      </SquareContainer>
      <SquareContainer>
        <ExpenseIcon>
          <TrendingDown />
        </ExpenseIcon>
        <Typography variant="body1">Saídas</Typography>
        <Typography variant="h3" marginTop="5px">- R$ 24.297,35</Typography>
      </SquareContainer>
    </Grid>
    <LimitContainer>
      <ExpenditureIcon>
        <AlertTriangle />
      </ExpenditureIcon>
      <Box sx={{ width: "80%", marginLeft: "12px" }}>
        <Grid sx={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "4px" }}>
          <Box>
            <Typography variant="body3">Teto Mensal</Typography>
            <Typography variant="body2" marginTop="10px" sx={{opacity: "0.7"}}>R$ 1.540,00 utilizado</Typography>
          </Box>
          <Box sx={{
                marginLeft: "auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "end"
          }}>
            <IconButton sx={{padding: "0"}}>
              <MoreHorizontal />
            </IconButton>
            <Typography variant="body1" fontWeight={600}>R$ 20.400,00</Typography>
          </Box>
        </Grid>
        <BorderLinearProgress variant="determinate" value={30} />
      </Box>
    </LimitContainer>
  </Wrapper>
  </>);
}

export default Dashboard;
