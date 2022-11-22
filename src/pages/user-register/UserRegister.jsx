import React from "react";
import { Box, Button, Container, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

function UserRegister() {
  const navigate = useNavigate();

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

          <TextField label="Nome" variant="outlined" />
          <TextField label="Sobrenome" variant="outlined" />
          <TextField label="Email" type="email" variant="outlined" />
          <TextField label="Senha" type="password" variant="outlined" />

        <Button variant="contained" sx={{marginTop: "15px"}}>Enviar</Button>
        <Button variant="outlined" color="secondary" onClick={() => navigate("/login")}>Cancelar</Button>
      </Box>
    </Container>
  );
}

export default UserRegister;
