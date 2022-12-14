import React from "react";
import Cards from "../../../components/cards/Cards"
import { Typography, Button, IconButton, Grid, Box, styled } from "@mui/material";

import { ReactComponent as TrendingUp } from '../../../assets/icons/trending-up.svg';
import { ReactComponent as TrendingDown } from '../../../assets/icons/trending-down.svg';
import { ReactComponent as AlertTriangle } from '../../../assets/icons/alert-triangle.svg';
import { ReactComponent as MoreHorizontal } from '../../../assets/icons/more-horizontal.svg';

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
    height: 48px;
    width: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(180deg, #FFCF53 0%, #FF9900 100%);
    box-shadow: 0px 10px 30px rgba(255, 153, 0, 0.2);
    border-radius: 24px;
  `;

  return (<Wrapper>
    <Cards />
    <Typography variant="h3" marginTop="32px">Carteira</Typography>
    <RoundedContainer>
      <Typography variant="h1">R$ 34.297</Typography>
      <Button variant="contained">Editar</Button>
    </RoundedContainer>
    <Grid sx={{ display: "flex", gap: "20px", marginTop: "16px" }}>
      <SquareContainer>
        <IncomeIcon>
          <TrendingUp />
        </IncomeIcon>
        <Typography variant="body1">Entradas</Typography>
        <Typography variant="h2" marginTop="5px">+ R$ 42.302</Typography>
      </SquareContainer>
      <SquareContainer>
        <ExpenseIcon>
          <TrendingDown />
        </ExpenseIcon>
        <Typography variant="body1">Saídas</Typography>
        <Typography variant="h2" marginTop="5px">- R$ 24.297</Typography>
      </SquareContainer>
    </Grid>
    <RoundedContainer>
      <Grid sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <ExpenditureIcon>
          <AlertTriangle />
        </ExpenditureIcon>
        <Box>
          <Typography variant="body2">Teto de gasto mensal</Typography>
          <Typography variant="body1" fontWeight="700">R$ 6.000</Typography>
        </Box>
      </Grid>
      <IconButton>
        <MoreHorizontal />
      </IconButton>
    </RoundedContainer>
  </Wrapper>
  );
}

export default Dashboard;
