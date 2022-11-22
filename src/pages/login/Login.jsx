import React from "react";
import { Box, Button, Container, TextField, Link } from "@mui/material";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

function Login() {
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
        <TextField label="Email" type="email" variant="outlined" />
        <TextField label="Senha" type="password" variant="outlined" />
        <Button onClick={() => navigate("/finances/dashboard")} variant="contained" sx={{marginTop: "15px"}}>Entrar</Button>
        <Link onClick={() => navigate("/password-recovery")}>Recuperar Senha</Link>
        <Link onClick={() => navigate("/user-register")}>Cadastrar-me</Link>
      </Box>
    </Container>
  );
}

export default Login;
