import React from "react";
import { Paper, Typography } from "@mui/material";

function Dashboard() {

  return (<div>
    <Paper elevation={3}>
        <Typography>Saldo</Typography>
        <Typography>R$ 83.000,00</Typography>
    </Paper>
    <Paper elevation={3}>
        Tomar Decisão
    </Paper>
    <Paper elevation={3}>
        Entrada
    </Paper>
    <Paper elevation={3}>
        Saída
    </Paper>
  </div>
  );
}

export default Dashboard;
