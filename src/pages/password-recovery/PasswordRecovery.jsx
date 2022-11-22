import React from "react";
import { Box, Button, Container, TextField } from "@mui/material";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

function PasswordRecovery() {
    const navigate = useNavigate();

  const StyledLogo = styled(Logo)`
    height: 130px;
    margin-bottom: 15px;
    path, line, circle {
      stroke: #76B561;
    }
  `;

  return (
    <Container
      fixed
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "80%",
          maxWidth: "400px",
        }}
      >
        <StyledLogo />
        <TextField label="Email" variant="outlined" />
        <Button variant="contained" sx={{marginTop: "15px"}}>Recuperar Senha</Button>
        <Button variant="outlined" color="secondary" onClick={() => navigate("/login")}>Cancelar</Button>
      </Box>
    </Container>
  );
}

export default PasswordRecovery;
